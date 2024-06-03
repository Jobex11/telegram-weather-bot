const axios = require("axios");
const token = "6557613409:AAGNP-oTvQzReDl3meB3iIIfvOjobZQfHXg";
const url = "https://telegram-weather-ec2bzd63w-jobinsons-projects.vercel.app";
const webhookUrl = `${url}/api/bot`;

axios
  .get(`https://api.telegram.org/bot${token}/setWebhook?url=${webhookUrl}`)
  .then((response) => {
    console.log("Webhook set successfully:", response.data);
  })
  .catch((error) => {
    console.error("Error setting webhook:", error);
  });
