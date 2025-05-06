const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'BWM-XMD;;;H4sIAAAAAAAAA5VUy46jRhT9lVFtcY8xYDCWWgoG4/cDg/EjmkUZClwYA4YCDC1voiiJ8iMdZRNNdvkTd74mwt2tnkVm0mGBSkVx7ql7zj0PIAhxgkaoAO0HEMU4gwRVS1JECLRBJ3UcFIMasCGBoA0mnS5Pr8IR1TdNHNPyzNTYxkBV4jFZtDS40lcd7G0ORWc1uQeXGojSnY+tbwD6ip5ya21XdhEKnf2h3yCjDpK7u6RQBrJLLW2dspzcmfeSe3CpECGOceB2oz06ohj6I1TMIY7fR9/qr9aW7LBHE01LUd4OfL1cnPnh1jPTpKxP02U/D8nJJSvpffQd0yYzhtW2EQsdFZ8XyUnzYnOjmRScrXozYaGI42w1mribZ/oJdgNkD2wUEEyKd/cdDdceO2Aszpgn5jmuLzZSN7R7+6mf7OanuuEZGxz2ds0xw72POGnFDCdRw7h5RhabHBUZ8ruz2utOfc+f9zb7IaUcNmYDMtKXxOfxq1cO/6fvuUoPqVY/YYdxfhDKJl0XKakcp3tfLgutM195SzrbL9d7v/s++kxPEQJVT1S7X9qZ6SjZ9JBTzaIz36eNzllsCA2/fqLqpdl9ow9JGn+LZXOKtylxRrkeyTldt12zu+F0pEnqyPXrc3ZYp9Sjuj2V+SkoddxZeVI0ZvQB4/U0cypp5l6PfB7GRytYhuakKXBMid37240OqBjYoN241ECMXJyQGBIcBrc9UagBaGc6smJEbu0Fhd3PyjW7SLaDNDDzHe9StL7t0g4vsQUV7Yqz6o2zdR5y+T2ogSgOLZQkyO7jhIRxMUFJAl2UgPb3n2ogQGfyLFxVjm3UgIPjhCyDNPJDaL+q+voRWlaYBkQvAkuuFigGbfptGxGCAzep+pgGMLb2OEPyHpIEtB3oJ+hSAzbKsIUqPJA38KosT6WennTIMYLKcgRqFeV9GDwf4UWBgSLP3XG7BnPHsZZw19oxrTuWazoWT/MitAVQA/hlZqp/viphS1m3pv3zXCnWhS4M2JnYVIKGPtpz4U2G596jGNmgTeIU1cAOWoc0MsIDCr6BG6ddUzsjkUq3YdrnWocxQahFNv3D5gvcZ01B++Etp+TQrvCG8moxVRtrUAPHmwVxdXORFwS2yfNNUeDaDPdd8jGvGgmj6GOACKiBAFanwfXx6afrX9c/r49PP36oXk8/PP16fbz+8fTzh+vj9benX267f/9+/Xx9vH6uCL2oVZWyEYHYT0AbyFN5m+0P2pmbh7m02Ui6JI0kqXLQq7qvY/JsQw4qg+FMFieTTm/c6FK2AZtxZ6jxIq5v+9SZLma0x2juQrL+DQS0wb4rjkJf8ybUYucZJ3zsCYPMXuUDW25pw6znW2MUrPrieCM7aMHx9Lg0vNHGhL7eW5wVEsqUt/a6vj9QDNUX5TyLm3J+X1V7dtmXxdb5IU2dYmK0zkVK0xN1q6C1Hi1XkwVxncCduad4tmOUss/LSdI0jJMxUAP+3Jl4zXrBTt2saCDf1pM0FCelpqb9g+FqzwN8CxD/JbjxbbQeXjzpYHTLwRe1/lPVt/GgL7UvMF6S9SsW7KCeW8iGmxmKtMDiYh4smRTm+nKWbTJmUU/siUcG4mHQ1frgcvlUA5EPiRPGR9AGyXEHQQ34MCHS23gb+IgSAo8RaDcEjm+yXEto1MCxkKJIJ5C8pgKQqmeELXD5B/dZu2AxCAAA' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:@Asitha2005b@db.waiqbrnuxkjebghzhovz.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL,
};
