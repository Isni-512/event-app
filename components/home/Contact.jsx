import emailjs from '@emailjs/browser';

const templateParams = {
            name: getValues().nom,
            email: getValues().email,
            subject: getValues().sujet,
            message: getValues().message,
        };

        emailjs
         emailjs
            .send(
                "service_5XY3BG6", // Service ID
                "template_iw5phsf", // Template ID
                templateParams,
                "Ou2fqOiMhT01BqJex" //USER PUBLIC KEY
            )
            .then(
                (result) => {
                    console.log("SUCCESS!", result.status, result.text);
                },
                (error) => {
                    console.log("FAILED...", error);
                }
            );