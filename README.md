# alu_regex-data-extraction-group21
regular expressions
# Data Extraction from API Responses using Regular Expressions

## Overview

This project is focused on extracting structured data from raw API responses using regular expressions. 
As a Junior Software Engineer at a startup building a social media app, the task is to extract specific data types from messy API responses to enhance the user experience.

The data types to be extracted include restaurant names, ingredient lists, RGB color values, social media usernames, product codes, news headlines, event dates and times, and email addresses. 

Regular expressions will be used to identify and extract these data patterns.

## Regular Expressions

In this project, we have defined regular expressions for each data type as follows:

1. **Restaurant Names and Cuisine Types**: `([\w\s]+) - ([\w\s]+)`
2. **Ingredient Lists**: `([\w\s]+(?:,\s[\w\s]+)*)`
3. **RGB Color Values**: `rgb\((\d{1,3}),\s(\d{1,3}),\s(\d{1,3})\)`
4. **Social Media Usernames**: `@(\w+)`
5. **Product Codes**: `([A-Z]{3}\d{3})`
6. **News Headlines**: `Headline: (.+?) - (.+)`
7. **Event Dates and Times**: `(\w{3} \d{2}, \d{4} - \d{2}:\d{2} [APap][Mm])`
8. **Email Addresses**: `(\S+@\S+\.\S+)`

## Getting Started

To start using this project, follow these steps:

1. Clone the repository to your local machine.

2. Open the project directory in your preferred code editor.

3. Implement the regular expressions in your scripts or codebase as needed to extract data from the API responses.

4. Test the regular expressions using sample data to ensure they work correctly for each data type. 

5. Use https://regexr.com/


Sample Data for Testing Regular Expressions:

1. Restaurant Names and Cuisine Types:
   - McDonald's - Fast Food
   - Olive Garden - Italian
   - Sushi Palace - Japanese
   - Pizza Hut - Italian

2. Ingredient Lists:
   - Eggs, Flour, Sugar, Milk
   - Tomatoes, Basil, Mozzarella
   - Chicken, Rice, Soy Sauce, Broccoli
   - Beef, Potatoes, Carrots, Onions

3. RGB Color Values:
   - Background color: rgb(255, 0, 128)
   - Text color: rgb(0, 255, 255)
   - Border color: rgb(128, 128, 128)

4. Social Media Usernames:
   - Follow us on Twitter: @SampleUser1
   - Connect with us on Instagram: @User123
   - Find us on Facebook: @MyPage123
   - Check out our Pinterest boards: @Pins456

5. Product Codes:
   - Product Code: XYZ789
   - Item Number: ABC123
   - Code: DEF456
   - ID: GHI789

6. News Headlines:
   - Headline: Breaking News - Major Event
   - Headline: Politics Update - New Legislation
   - Headline: Technology News - Latest Gadgets
   - Headline: Sports Report - Championship Game

7. Event Dates and Times:
   - Event Date: Nov 15, 2023 - 02:30 PM
   - Conference Date: Sep 10, 2023 - 09:45 AM
   - Workshop Date: Dec 05, 2023 - 03:15 PM
   - Seminar Date: Oct 20, 2023 - 01:00 PM

8. Email Addresses:
   - Contact us at: info@example.com
   - Email support: support@mywebsite.com
   - Send inquiries to: contact@company.co
   - Reach out to us: contactus@domain.org
 
Contributing

Contributions to improve or extend this project are welcome. If you have suggestions, bug fixes, or new features to add, please create a pull request.

License

This project is licensed under the MIT License.

Acknowledgments

This project was inspired by the need to extract structured data from messy API responses.
Regular expressions are a powerful tool for pattern matching and data extraction.
Special thanks to the group for their contributions to this project.
