const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔑 Twilio credentials
const client = twilio("AC9092ec672d7b9eff1c31c48783e3e585", "bd7760c798979c20ee71b81891addfb8");

// 📩 API route

app.post("/order", async (req, res) => {
  const order = req.body;
    console.log("🔥 ORDER RECEIVED:", req.body); // ADD THIS

  let msg = `🛍️ New Order

ID: ${order.id}
Name: ${order.customer.first} ${order.customer.last}
Phone: ${order.customer.phone}
Total: ₹${order.total}
Payment: ${order.payment}
`;

  try {
    await client.messages.create({
      from: "whatsapp:+14155238886",
      to: "whatsapp:+917822991866", // your number
      body: msg
    });

    console.log("WhatsApp sent");

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});