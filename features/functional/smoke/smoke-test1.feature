@foo
Feature: WF docs

  Background: Navigate to the WF retail website
    Given I am on the homepage

  Scenario: Display a list of product collections
    When I scroll at the header of the page using scroll icon
    Then I should see a list of product collections
      | Product Collections      |
      | Grill                    |
      | New Products             |
      | Beef                     |
      | Seafood                  |
      | Chicken & Turkey         |
      | Specialty Meats          |
      | Seasoned                 |
      | Halal                    |
      | Lamb                     |
      | Pork                     |
      | Sausages & Ground Meat   |
      | Quick & Easy             |
      | Fruits & Vegetables      |
      | Bakery, Dairy & Desserts |
      | Spices & Sauces          |
    When I randomly click on any product type
    Then I should be directed to the corresponding product landing page
