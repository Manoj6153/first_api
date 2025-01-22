const express = require('express');
const app = express();

app.get('/assistant/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const currentDay = daysOfWeek[new Date().getDay()];


    let dayMessage;
    if (currentDay === "Monday") {
        dayMessage = "Happy Monday! Start your week with energy!";
    } else if (currentDay === "Friday") {
        dayMessage = "It's Friday! The weekend is near!";
    } else {
        dayMessage = "Have a wonderful day!";
    }

    const response = {
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: dayMessage
    };

    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});