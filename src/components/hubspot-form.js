import React, {useEffect} from "react";

const HubspotForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/embed/v2.js';
        
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                const URL_AMBIENTE = "https://beta-alicore.production.alicredito.com.br";
                const CLIENT_ID = "infra-ali-blue-friday-webapp-34e70dff";
                const CLIENT_SECRET = "dbe8895ca67bcd7284888502b5f6b6466f93530c19cc90dadbfce913e97e7298a609273afa7464d9193509f8c983285f";

                const START_CAMPAIGN = new Date('2022-11-22T00:00:00.000Z');
                const END_CAMPAIGN = new Date('2022-11-26T00:00:00.000Z');

                const NOT_ELIGIBLE_MSG = "<p>Poxa, essa campanha não está elegível para você.</p><p> Mas temos outras condições bem especiais para você curtir a Black Friday em grande estilo!</p>"
                const ELIGIBLE_MSG = "<p>Tudo certo com seu cadastro na Blue Friday!</p><p>Em instantes, você receberá uma mensagem via WhatsApp para dar sequência na contratação.</p>"

                var messageElement, formElem;
                var JWT_TOKEN;

                async function getToken() {
                    const headers = new Headers();
                    headers.append("Content-Type", "application/json");
                    const result = await fetch(`${URL_AMBIENTE}/oauth/access_token`, {
                        method: 'POST',
                        headers,
                        body: JSON.stringify({
                            client_id: CLIENT_ID,
                            client_secret: CLIENT_SECRET
                        })
                    });

                    const { jwt } = await result.json();
                    return jwt;

                }

                async function checkAli(nationalDocument) {
                    if (!nationalDocument) return false;
                    const headers = new Headers();
                    headers.append("Authorization", `Bearer ${JWT_TOKEN}`);
                    headers.append("Content-Type", "application/json");

                    const options = {
                        method: 'POST',
                        headers,
                        body: JSON.stringify({
                            nationalDocument
                        })
                    }

                    try {
                        const result = await fetch(`${URL_AMBIENTE}/oauth/data-check-no-crypt`, options);
                        return result.ok;
                    } catch (error) {
                        return false;
                    }
                }

                async function getUserData(documentNumber) {
                    if (!documentNumber) return;
                    const headers = new Headers();
                    headers.append("Authorization", `Bearer ${JWT_TOKEN}`);
                    headers.append("Content-Type", "application/json");

                    const options = {
                        method: 'POST',
                        headers,
                        body: JSON.stringify({
                            documentNumber
                        })
                    }

                    const result = await fetch(`${URL_AMBIENTE}/customers/overview`, options);
                    return result.ok ? result.json() : null;
                }

                async function sendWhatsAppMessage(phoneNumber) {
                    if (!phoneNumber) return;
                    const headers = new Headers();
                    headers.append("Content-Type", "application/json");

                    const blip_ID = `55${phoneNumber}@wa.gw.msging.net`

                    const options = {
                        method: 'POST',
                        headers,
                        body: JSON.stringify({
                            blip_ID
                        })
                    }

                    const result = await fetch("https://hook.us1.make.com/k39ci02gcv796avtsmp0qglvqiexvvh1", options);
                    return result;
                }

                async function handleFormSubmit(formElem, formFields) {
                    const email = formFields.filter(field => field.name === 'email')[0]?.value;
                    const nationalDocument = formFields.filter(field => field.name === 'cpf')[0]?.value;
                    const phoneNumber = formFields.filter(field => field.name === 'phone')[0]?.value;

                    const conveniado = await checkAli(nationalDocument);

                    if (conveniado) {
                        const userData = await getUserData(nationalDocument);
                        const answerDate = new Date(userData?.data?.customer?.Consent?.answerDate)
                        if (answerDate && answerDate > START_CAMPAIGN && answerDate < END_CAMPAIGN) {
                            await sendWhatsAppMessage(phoneNumber)
                            messageElement.innerHTML = ELIGIBLE_MSG;
                            return;
                        }
                    }

                    messageElement.innerHTML = NOT_ELIGIBLE_MSG;
                }

                function handleFormSubmitted(elemMessage, param2) {
                    messageElement.style.display = 'block';
                    elemMessage.remove();
                }

                async function handleOnLoad() {
                    JWT_TOKEN = await getToken();
                    messageElement = document.createElement('div');
                    messageElement.setAttribute('id', 'divMessage');
                    messageElement.style.display = 'none';
                    document.body.appendChild(messageElement)
                }

                window.onload = handleOnLoad();

                var hsForm = window.hbspt.forms.create({
                    region: "na1",
                    portalId: "20869742",
                    formId: "1c42ab7c-696d-407d-b91d-b861524dda69",
                    target: '#hubspotForm',
                    onFormSubmit: handleFormSubmit,
                    onFormSubmitted: handleFormSubmitted
                });
            }
        });
    }, []);

    return (
        <div id="hubspotForm"></div>
    );

}

export default HubspotForm;