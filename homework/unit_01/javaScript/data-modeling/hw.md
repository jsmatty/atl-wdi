[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

>var task = {
  name: 'pick paint color';
  startDate: '07/05/2017';
  endDate: '07/05/2017';
};
var project = {
  name: 'paint bedroom';
  setOfTasks: ['buy paint', 'buy brushes', 'tape-off walls' ];
  }

Using variables "Task" and "Project" would allow the user to track their progress on completing a task but, also work efficiently through a group of tasks that make up a project. You could also add another property 'completeByDate' that would allow the user to set a projected completion date, so they can see how many minutes/hours they should spend on the task/project daily in order to complete by a certain date.

### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

var user = {
  name: 'Jessica';
  NumberOfAlbums: '6';
};
var photo = {
  uploadDate: '07/05/2017';
  photoName: 'Photo of dog'; 
}

Using variables "User" and "photo" allows users to organize uploaded photos into albums based on names and date the picture was uploaded.

### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

var house = {
  lightLocations; ['living room', 'master bedroom', 'kitchen', 'guest room'];
  temperatureFarenheit: '68';
}
var thermostat = {
  time: '05:30';
  dayOfWeek:'Thursday';
  temperature: '71';
}
Variables "House" and "Thermostat", would allow users to access lights in different areas of their house and check the overall interior temperature. The variable "Thermostat" would allow users to set different temperatures in the house based on the time and day of the week. The day of the week matters because people generally turn off their AC while at work during the week and usually run it all day during the weekends.

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

var products = {
  name: 'Pool float';
  description: "Inflatable pizza shaped pool float.";
  price: 20.00;
}
var order = {
  items: '1';
  dateOrderPlaced: '06/04/2017';
  ShippingCost: '5.00';
  totalPrice: '25.00';
}
The "Product" variable will have detailed information concerning a specific product. The "Order" variable will allow users to preview their items as well as total costs before commiting to a purchase.

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

> Disadvantages of these representations is that the user would want to know a specific number of stops before arriving at their destination or how many stops a train has left before it gets to the station they are waiting at.

Advantages of these representations is that each of the stops has a name and description that the user can access but, the user would need to search that specific location and calculate how many stops from that information.

### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

> In the first example: it would be fairly easy to find all the appointments a given doctor has since they are rooted in the doctors variable but, to find a patients appointment the user would need to check every doctors appointments for their specific appointment.
 
 In the second example: This is much easier to find a patients appointments but, in order to find a specific doctors appointments, the user would need to filter through each appointment.

 I think choosing a better format over the other would ultimately depend on who the user is and what information they are trying to find. A doctor would not need to look at all appointments of specific patient and vice versa.

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

b.  How might those entities be represented in JavaScript code?

  var player = {
      username: 'jsmatty'
      photoUrl: 'http://imgur.com/..'
  };
  var move = {
    gamePiece: 'o',
    position: 3,
   };
  var game = {
      playerO: {
        username:'jsmatty',
        photoURL: 'http://imgur.com/..',
    },
      moves: [
    {
      gamePiece: 'O',
      position: 2,
    },
    {
      gamePiece: 'X',
      position: 4,
    }
  ]
 };
  


c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

  > The game of Tic-Tac-Toe usually has two players represented with game pieces 'X' and 'O'. A player will move to a position on the game board depending on either what moves/ position they need to be at on the board to achieve either three in a row or block their opponent. 
  Each player has their own property which allows us to store any information regarding their moves and scores in an array. 
