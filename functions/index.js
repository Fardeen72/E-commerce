const functions = require("firebase-functions");
const admin = require("firebase-admin");
const twilio = require("twilio");

admin.initializeApp();

const client = twilio("YOUR_TWILIO_SIDAC9092ec672d7b9eff1c31c48783e3e585", "bd7760c798979c20ee71b81891addfb8");

exports.sendWhatsAppOnOrder = functions.firestore
  .document("orders/{orderId}")
  .onCreate(async (snap, context) => {

    const order = snap.data();

    let message = `
🛍️ New Order

ID: ${order.id}
Name: ${order.customer.first} ${order.customer.last}
Phone: ${order.customer.phone}
Total: ₹${order.total}
Payment: ${order.payment}
`;

    try {
      await client.messages.create({
        from: "whatsapp:+14155238886", // Twilio sandbox
        to: "whatsapp:+917822991866", // YOUR number
        body: message
      });

      console.log("WhatsApp sent");
    } catch (err) {
      console.error("Twilio error:", err);
    }
  });