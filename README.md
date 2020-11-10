<p align="center">
  <img src="https://e2ad9287-0012-49f5-a7bf-b07442f37676.ws-eu01.gitpod.io/mini-browser/workspace/MS2/img/logoms2.png" alt="Meal finder logo"/>
</p>

# Description

*This is a Meal Finding APP*

> Meal Finding App is all about fantastic food recipes generated instantly, providing you not only wwith pictures, ingridients list, methods, allergens and calories but also with wide macronutrient data for those with health issues or proffesional athleets.

> 

# Deployment and Demo

Website has been deployed to [GitHub Pages](https://miszamm.github.io/MS2/).

# Wireframe

The wireframe was designed using [Balsamiq]() and links to the final version can be found below:

- [Wireframe Final Version]()

# UX

I have opted to a simple and responsive design which is lightweight and has a loading time of less than 1 second.

- Home page: Contains a jumbotron and a background image for the main section which resizes accordingly depending on user's viewport size
- About us page: Contains a jumbotron with a inner carousel in the main section and a set of card elements at the bottom section for the leaders of the company
- Franchise page: Contains a form in the first section so users can sign up as franchiser owners. Below we have reused a jumbotron with inner carousel
- Services page: Services page contains a grid system with inner card elements
- contact page: Contact page contains a contact form with a food truck PNG image on top

![Responsive image with many different monitors](img2/responsive.jpeg)

In order to improve user experience and website loading speed, I have compressed the images using [tinypng.com](https://tinypng.com/) and the reduction in image size has been 57%.

![tinypng image saving results](images/image_compressor.png)

# Visual Identity

- [Logo Pony](https://www.logopony.com/) for the logo design and stationary
- [Bootswatch](https://bootswatch.com/) themes to add extra sweetness

# User Stories

Users:

- As a user, I'd like to rent a food truck for an event
- As a user, I'd like to contact the company to help me start my business
- As a user, I'd like to see who are the leaders of the company
- As a user, I'd like to sign up as a franchise owner for the company

Food truck owners:

- As a business owner, I'd like to list my services in the site
- As a business owner, I'd like to receive legal advice on certain issues
- As a business owner, I'd like to access the members area
- As a business owner, I'd like to connect with other businesses in my area

# Testing

Website has been tested using [GTmetrix](https://gtmetrix.com/reports/fandressouza.github.io/7xHu6MBv) and [BrowserStack](), see results below:

![Website Speed Test Results](images/speed_test.png)

The points below can be improved with a bit more optimization:

- Serving scaled images (some images are being resized in CSS e.g. logo.png)
- Leveraging browser caching
- When I did this test, css/theme.css returned a 404 (Imispelled Theme.css)

# Scalability

Using a back-end programming language and database, I'd like to have a fully featured CMS which can be used by non-technical people to create, read, update and delete data easily.

Also, I'd like franchise owners to have a private section where they can find resources and talk directly to our customer service representatives.

# Technologies

- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)

# Media

I have used different resources for images and my logo, I'll list all below:

- [Logo Pony](https://www.logopony.com/) for the logo design and stationary
- [Unsplash](https://unsplash.com) for all the images
- [Font Awesome](https://fontawesome.com/6?next=%2Fstart) for the amazing icons used on this site
- [Am I Responsive](http://ami.responsivedesign.is/) for the cool image in the UX section

# Thanks to

- Font awesome community for developing this great resource
- Bootstrap crew for developing and maintaining such great library
- jQuery developers for all the work and great documentation
- Logo pony for the great service
- Unsplash.com for the wonderful pictures
- Microsoft for developing VScode and providing it free of charge

# License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

Copyright 2020 .

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.