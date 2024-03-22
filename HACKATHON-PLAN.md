🔥 Fireplace Palace Hackathon Plan 🔥

Objectives:

- (Priority) A new component on the home page that allows a user to select (click) their country and see the latest review (fetch data).
- Complete our Founders page
- Complete menu toggle
- Review any styling and media queries

MVP Plan:

1. Create a plan ✅
2. Study Loz's API documentation and work out how to use it ✅
3. Break down the new component for mobile view first ✅
4. Plan each section of the build ✅
   - Make folder called Trusted ✅
   - Make jsx and css files within folder ✅
5. Follow plan to build the mobile version ✅
6. Test as we go ✅
7. Implement the API once the code for the mobile site is working ✅
8. Test the API ✅
9. Once the mobile view is working, repeat steps 3-8 for the desktop version ✅

🚀Stretch Goals:

- Complete our Founders pagepage ✅
- Complete menu toggle ✅
- Review any styling and media queries ✅
- Create our own API













Fireplace Palace API:

Usage:
To fetch reviews, make a GET request to /reviews with a query parameter specifying the country. For example:
https://seal-app-336e8.ondigitalocean.app/reviews?country=scotland
https://seal-app-336e8.ondigitalocean.app/reviews?country=england
https://seal-app-336e8.ondigitalocean.app/reviews?country=wales

Valid countries are England, Scotland, and Wales. The country parameter is case-insensitive.
Response Format:

The response will be a JSON object containing the review text, author, location, and businessName. Example:

{
"text": "We couldn't be happier with our new fireplace - Mike and Mandy came recommended but we were still blown away by the quality of service. 😊 🏆",
"author": "Amy Mcdonald",
"location": "Inverness",
"businessName": "Fireplace Palace"
}
