const hotelsData = [
  {
    id: "12b2ef05-7da5-4052-a330-ff456974835c",
    name: "Pod Akacjami",
    country: "Polska",
    city: "Warszawa",
    type: "Hotel",
    standard: 2,
    rating: 3.3,
    opinions: 179,
    price: 220,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et diam elit. Aenean a ipsum dui. Nullam dignissim lectus et risus consectetur posuere. Fusce elementum nisi metus, at varius magna venenatis eu. In vel tellus feugiat augue accumsan sollicitudin eget at nunc. Maecenas facilisis lacus sed tellus aliquet, eu pretium arcu volutpat.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et diam elit. Aenean a ipsum dui. Nullam dignissim lectus et risus consectetur posuere. Fusce elementum nisi metus, at varius magna venenatis eu. In vel tellus feugiat augue accumsan sollicitudin eget at nunc. Maecenas facilisis lacus sed tellus aliquet, eu pretium arcu volutpat. Proin condimentum ac libero nec elementum. Suspendisse euismod pretium sodales. Nam condimentum nec mi ac malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et mi a nisi gravida pellentesque vel vitae dui. Nullam congue ipsum eu nisi tempor accumsan nec ut dui. Cras non ante facilisis, volutpat ligula eget, luctus orci. Integer varius tortor non dui molestie aliquam. Proin tempor consequat pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ullamcorper diam eget tincidunt fermentum. Nam in nisi nec dolor dapibus faucibus at id nulla. Morbi sit amet mauris purus. Nulla commodo congue elit eget pharetra. Ut a libero lacus. THE END",
    image:
      "https://ocdn.eu/pulscms-transforms/1/x7Ek9kpTURBXy84NjFjZmJhNTc5MGRiNTgzMDU3NDY5YTNhMTcxNDJiNi5qcGeSlQMAzQEWzQtAzQZUlQLNAhoAw8OBoTEB",
  },
  {
    id: "5695e78a-44ea-4d70-8fa4-e7928bfcb73a",
    name: "Dębowy",
    country: "Polska",
    city: "Lublin",
    type: "Pensjonat",
    standard: 5,
    rating: 8.7,
    opinions: 193,
    price: 179,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et diam elit. Aenean a ipsum dui. Nullam dignissim lectus et risus consectetur posuere. Fusce elementum nisi metus, at varius magna venenatis eu. In vel tellus feugiat augue accumsan sollicitudin eget at nunc. Maecenas facilisis lacus sed tellus aliquet, eu pretium arcu volutpat.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et diam elit. Aenean a ipsum dui. Nullam dignissim lectus et risus consectetur posuere. Fusce elementum nisi metus, at varius magna venenatis eu. In vel tellus feugiat augue accumsan sollicitudin eget at nunc. Maecenas facilisis lacus sed tellus aliquet, eu pretium arcu volutpat. Proin condimentum ac libero nec elementum. Suspendisse euismod pretium sodales. Nam condimentum nec mi ac malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et mi a nisi gravida pellentesque vel vitae dui. Nullam congue ipsum eu nisi tempor accumsan nec ut dui. Cras non ante facilisis, volutpat ligula eget, luctus orci. Integer varius tortor non dui molestie aliquam. Proin tempor consequat pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ullamcorper diam eget tincidunt fermentum. Nam in nisi nec dolor dapibus faucibus at id nulla. Morbi sit amet mauris purus. Nulla commodo congue elit eget pharetra. Ut a libero lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ullamcorper diam eget tincidunt fermentum. Nam in nisi nec dolor dapibus faucibus at id nulla. Morbi sit amet mauris purus. Nulla commodo congue elit eget pharetra. Ut a libero lacus.",
    image:
      "https://i0.wp.com/magazyn.travelist.pl/wp-content/uploads/2016/12/hotel-binkowski_11573_gallery_1140x620.jpg?resize=690%2C375&ssl=1",
  },
  {
    id: "831d65e7-0ee1-4fe7-9976-09aae7253482",
    name: "Blue Hotel",
    country: "Turcja",
    city: "Bodrum",
    type: "Apartament",
    standard: "3",
    rating: 6.4,
    opinions: 598,
    price: 360,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et diam elit. Aenean a ipsum dui. Nullam dignissim lectus et risus consectetur posuere. Fusce elementum nisi metus, at varius magna venenatis eu. In vel tellus feugiat augue accumsan sollicitudin eget at nunc. Maecenas facilisis lacus sed tellus aliquet, eu pretium arcu volutpat.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et diam elit. Aenean a ipsum dui. Nullam dignissim lectus et risus consectetur posuere. Fusce elementum nisi metus, at varius magna venenatis eu. In vel tellus feugiat augue accumsan sollicitudin eget at nunc. Maecenas facilisis lacus sed tellus aliquet, eu pretium arcu volutpat. Proin condimentum ac libero nec elementum. Suspendisse euismod pretium sodales. Nam condimentum nec mi ac malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et mi a nisi gravida pellentesque vel vitae dui. Nullam congue ipsum eu nisi tempor accumsan nec ut dui. Cras non ante facilisis, volutpat ligula eget, luctus orci. Integer varius tortor non dui molestie aliquam. Proin tempor consequat pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ullamcorper diam eget tincidunt fermentum. Nam in nisi nec dolor dapibus faucibus at id nulla. Morbi sit amet mauris purus. Nulla commodo congue elit eget pharetra. Ut a libero lacus.",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/17/d7/d1/f0/swandor-hotels-and-resorts.jpg",
  },
];

export default hotelsData;
