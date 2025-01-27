const uuid = () => {
    return Math.random().toString(36).substr(2, 9);
}

export const listings = [
    {
        "geometry": {
            "coordinates": [
                -90.4665694,
                38.603453
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "13421 Manchester Rd",
            "city": "St. Louis",
            "country": "US",
            "latitude": 38.603453,
            "longitude": -90.4665694,
            "merchantId": "34a22c4f-0320-4423-b7e1-b21fdb543cc1",
            "name": "1800Flowers",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "fad73c9e-146e-4535-833f-136f46890c94",
            "territory": "Missouri",
            "type": "physical",
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -87.8635452,
                41.9087985
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "2457 W North Ave",
            "city": "Melrose Park",
            "country": "US",
            "latitude": 41.9087985,
            "longitude": -87.8635452,
            "merchantId": "34a22c4f-0320-4423-b7e1-b21fdb543cc1",
            "name": "1800Flowers",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "9694a802-66b5-4713-98fa-13cf996826d0",
            "territory": "Illinois",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -121.4104767,
                38.5958386
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "2300 Arden Way",
            "city": "Sacramento",
            "country": "US",
            "latitude": 38.5958386,
            "longitude": -121.4104767,
            "merchantId": "34a22c4f-0320-4423-b7e1-b21fdb543cc1",
            "name": "1800Flowers",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "bbd754b0-2ef3-4c36-ad8b-4d31b290b15b",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -112.0484447,
                33.4281642
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "2050 S 16th St #100",
            "city": "Phoenix",
            "country": "US",
            "latitude": 33.4281642,
            "longitude": -112.0484447,
            "merchantId": "34a22c4f-0320-4423-b7e1-b21fdb543cc1",
            "name": "1800Flowers",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "2089fdc7-557f-49ec-a737-f5c9dac37be3",
            "territory": "Arizona",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.0288993,
                40.6222601
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "8622 4th Ave",
            "city": "Brooklyn",
            "country": "US",
            "latitude": 40.6222601,
            "longitude": -74.0288993,
            "merchantId": "34a22c4f-0320-4423-b7e1-b21fdb543cc1",
            "name": "1800Flowers",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "d6d86082-a352-4c93-8229-a4cc168ef695",
            "territory": "New York",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -82.9743844,
                42.6393253
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "46569 Hayes Rd",
            "city": "Shelby Charter Township",
            "country": "US",
            "latitude": 42.6393253,
            "longitude": -82.9743844,
            "merchantId": "34a22c4f-0320-4423-b7e1-b21fdb543cc1",
            "name": "1800Flowers",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "c2eb10df-2da5-41be-9bd6-8ad431129eda",
            "territory": "Michigan",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -87.9812665,
                42.2366655
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "1363 Wilhelm Rd",
            "city": "Mundelein",
            "country": "US",
            "latitude": 42.2366655,
            "longitude": -87.9812665,
            "merchantId": "34a22c4f-0320-4423-b7e1-b21fdb543cc1",
            "name": "1800Flowers",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "a1f0f813-95d1-49e0-a24c-8f7560e05747",
            "territory": "Illinois",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -81.5182707,
                30.2140219
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "10920 Baymeadows Rd #1",
            "city": "Jacksonville",
            "country": "US",
            "latitude": 30.2140219,
            "longitude": -81.5182707,
            "merchantId": "34a22c4f-0320-4423-b7e1-b21fdb543cc1",
            "name": "1800Flowers",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "61638bc7-ef70-444a-b875-9fe6f2fcd7c0",
            "territory": "Florida",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -85.756742,
                42.879787
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "3700 Rivertown Parkway",
            "address2": "Space 1036",
            "city": "Grandville",
            "country": "US",
            "latitude": 42.879787,
            "longitude": -85.756742,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "03cfd305-1d65-4991-a573-2f57f5359994",
            "territory": "Michigan",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -93.805014,
                41.570144
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "101 Jordan Creek Parkway",
            "address2": "Suite 12316",
            "city": "West Des Moines",
            "country": "US",
            "latitude": 41.570144,
            "longitude": -93.805014,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "605e6e62-a68d-414d-8a72-17dbe612f3e1",
            "territory": "Iowa",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -82.9812223,
                40.1454369
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "1500 Polaris Pkwy #2180",
            "city": "Columbus",
            "country": "US",
            "latitude": 40.1454369,
            "longitude": -82.9812223,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "bc1d811b-3c3c-45e3-9fbf-cd0517bddc06",
            "territory": "Ohio",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -93.239982,
                44.85551
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "200 E Broadway e",
            "city": "Bloomington",
            "country": "US",
            "latitude": 44.85551,
            "longitude": -93.239982,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "a06b394a-8437-47f8-88ab-e25a7e26e03e",
            "territory": "Minnesota",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -88.044463,
                43.064214
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "2500 N Mayfair Road",
            "address2": "Space 865",
            "city": "Wauwatosa",
            "country": "US",
            "latitude": 43.064214,
            "longitude": -88.044463,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "a06bd90b-006f-43d7-abf9-29d74c43b789",
            "territory": "Wisconsin",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -80.056154,
                40.342961
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "301 South Hills Village #2235",
            "city": "Pittsburgh",
            "country": "US",
            "latitude": 40.342961,
            "longitude": -80.056154,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "ddfab40c-9c17-40c1-9c99-6fb01eed744f",
            "territory": "Pennsylvania",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -149.889216,
                61.216931
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "320 W 5th Ave #344",
            "city": "Anchorage",
            "country": "US",
            "latitude": 61.216931,
            "longitude": -149.889216,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "668ba27b-928d-4c90-8f5b-231d844f07aa",
            "territory": "Alaska",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -87.67981,
                30.374139
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "2601 S McKenzie St #426",
            "city": "Foley",
            "country": "US",
            "latitude": 30.374139,
            "longitude": -87.67981,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "a38ce89f-ac83-40ee-b293-6e0a2966119d",
            "territory": "Alabama",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -78.961385,
                35.071714
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "434 Cross Creek Mall",
            "city": "Fayetteville",
            "country": "US",
            "latitude": 35.071714,
            "longitude": -78.961385,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "e3c1c7c0-e8a5-460c-a2d0-32984f32e739",
            "territory": "North Carolina",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -79.178368,
                37.364716
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "3405 Chandlers Mtn Road",
            "city": "Lynchburg",
            "country": "US",
            "latitude": 37.364716,
            "longitude": -79.178368,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "e6a1a7df-9058-4d74-82fe-d41a45821bcd",
            "territory": "Virginia",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -88.470192,
                44.270063
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "4301 W Wisconsin Avenue",
            "address2": "Space No. 113",
            "city": "Appleton",
            "country": "US",
            "latitude": 44.270063,
            "longitude": -88.470192,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "cf719ddc-71c3-44c3-95bd-b98aa6ed55f6",
            "territory": "Wisconsin",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -80.3005578,
                36.0699575
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "3320 Silas Creek Pkwy",
            "city": "Winston-Salem",
            "country": "US",
            "latitude": 36.0699575,
            "longitude": -80.3005578,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "b13c2287-cb98-436c-8144-aa685f3e3a9c",
            "territory": "North Carolina",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -87.849403,
                41.620199
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "714 Orland Square Dr",
            "city": "Orland Park",
            "country": "US",
            "latitude": 41.620199,
            "longitude": -87.849403,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "b03628e1-3b0d-4971-83a8-078bdedc7df7",
            "territory": "Illinois",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -78.978703,
                43.097759
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "1819 Fashion Outlets Blvd",
            "city": "Niagara Falls",
            "country": "US",
            "latitude": 43.097759,
            "longitude": -78.978703,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "6ff8f9c7-b9c9-4893-9f46-eef4efb9e01d",
            "territory": "New York",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -80.008603,
                40.542555
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "1000 Ross Park Mall Dr",
            "city": "Pittsburgh",
            "country": "US",
            "latitude": 40.542555,
            "longitude": -80.008603,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "2c722653-bf5c-4594-8d1e-8ebd4bc056d8",
            "territory": "Pennsylvania",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -76.848838,
                40.824785
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "1 Susquehanna Valley Mall Dr",
            "city": "Selinsgrove",
            "country": "US",
            "latitude": 40.824785,
            "longitude": -76.848838,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "9d0b2dd4-65ec-4dee-a366-33f2fc01a454",
            "territory": "Pennsylvania",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -82.079908,
                33.464027
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "3450 Wrightsboro Road",
            "address2": "Space 1425",
            "city": "Augusta",
            "country": "US",
            "latitude": 33.464027,
            "longitude": -82.079908,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "558ea0e7-c64a-4795-95f8-cf883f1803cf",
            "territory": "Georgia",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -118.149722,
                34.006867
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "100 Citadel Dr #701",
            "city": "Los Angeles",
            "country": "US",
            "latitude": 34.006867,
            "longitude": -118.149722,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "b03cda45-bc59-43f9-8ff9-a5e62c6477c9",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -75.570388,
                40.237214
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "18 West Lightcap Rd #0241a",
            "city": "Pottstown",
            "country": "US",
            "latitude": 40.237214,
            "longitude": -75.570388,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "dcee75a9-0a4a-4c13-a954-efbca9245fa2",
            "territory": "Pennsylvania",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -122.573521,
                45.43632
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "12000 SE 82nd Ave #2049",
            "city": "Portland",
            "country": "US",
            "latitude": 45.43632,
            "longitude": -122.573521,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "f29a1f0b-523b-48e3-9621-7c2e90198771",
            "territory": "Oregon",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -92.226489,
                34.793155
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "3929 McCain Blvd",
            "city": "North Little Rock",
            "country": "US",
            "latitude": 34.793155,
            "longitude": -92.226489,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "5aa20d2e-5828-4968-8377-bd7aad05dcde",
            "territory": "Arkansas",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -74.554766,
                40.907847
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "301 Mount Hope Avenue",
            "address2": "Space 2021",
            "city": "Rockaway",
            "country": "US",
            "latitude": 40.907847,
            "longitude": -74.554766,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "dc4b862b-0a81-4bfa-92c7-191914e3c087",
            "territory": "New Jersey",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -118.886248,
                34.182793
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "180 West Hillcrest Dr",
            "address2": "Space E111",
            "city": "Thousand Oaks",
            "country": "US",
            "latitude": 34.182793,
            "longitude": -118.886248,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "90b678e8-c903-494a-990f-afbc2599c8ff",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -101.924998,
                33.538816
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "6002 Slide Rd",
            "city": "Lubbock",
            "country": "US",
            "latitude": 33.538816,
            "longitude": -101.924998,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "4592132e-646f-420a-ac86-2468f8dd5387",
            "territory": "Texas",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -121.269862,
                38.772958
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "1151 Galleria Blvd #2160",
            "city": "Roseville",
            "country": "US",
            "latitude": 38.772958,
            "longitude": -121.269862,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "d4c02b0a-e2f8-4646-a4a1-fc2d4db81f63",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -119.774771,
                36.806793
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "699 E Shaw",
            "address2": "Space E15",
            "city": "Fresno",
            "country": "US",
            "latitude": 36.806793,
            "longitude": -119.774771,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "e21315ef-4b19-4fae-9c85-60625b0b5f9c",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -97.246667,
                37.683673
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "7700 East Kellogg Dr",
            "address2": "Space P-06",
            "city": "Wichita",
            "country": "US",
            "latitude": 37.683673,
            "longitude": -97.246667,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "cefeecd7-ac87-4aa9-9089-f198d51fe726",
            "territory": "Kansas",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -122.935386,
                47.041594
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "625 Black Lake Blvd SW #138",
            "city": "Olympia",
            "country": "US",
            "latitude": 47.041594,
            "longitude": -122.935386,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "3bfa3f75-9315-4601-84d9-ab27a6d68c43",
            "territory": "Washington",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -122.2924541,
                37.8352996
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "5653 Bay St",
            "city": "Emeryville",
            "country": "US",
            "latitude": 37.8352996,
            "longitude": -122.2924541,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "fc1c0912-b2c1-4762-a7bb-37927e292a68",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -119.061598,
                34.217576
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "690 E Ventura Boulevard",
            "address2": "Suite 112",
            "city": "Camarillo",
            "country": "US",
            "latitude": 34.217576,
            "longitude": -119.061598,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "d99d68bc-444b-436a-ad60-73d2bed877ba",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -119.034426,
                35.338233
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "2701 Ming Ave Suite 185",
            "city": "Bakersfield",
            "country": "US",
            "latitude": 35.338233,
            "longitude": -119.034426,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "923f6d6c-3154-43c4-b83b-decf6adda492",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -118.942055,
                34.985548
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "5701 Outlets at Tejon Parkway",
            "address2": "Suite 805",
            "city": "Arvin",
            "country": "US",
            "latitude": 34.985548,
            "longitude": -118.942055,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "627656e6-8714-484e-9f5b-82982100804c",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -96.812319,
                33.098309
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "2601 Preston Rd #2248",
            "city": "Frisco",
            "country": "US",
            "latitude": 33.098309,
            "longitude": -96.812319,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "f3cf6253-abc8-4f83-8fd9-8dd1c0c6f4eb",
            "territory": "Texas",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -118.094872,
                33.862833
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "160 Los Cerritos Center",
            "address2": "Space A-18",
            "city": "Cerritos",
            "country": "US",
            "latitude": 33.862833,
            "longitude": -118.094872,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "e0f50f90-e76b-4413-946f-b370ab13c2ab",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -111.015088,
                32.340869
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "7401 N la Cholla Blvd #160",
            "city": "Tucson",
            "country": "US",
            "latitude": 32.340869,
            "longitude": -111.015088,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "ca0fc599-cf8a-4d87-8cae-0dd0652a45d6",
            "territory": "Arizona",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.024682,
                42.221721
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "250 Granite St #74",
            "city": "Braintree",
            "country": "US",
            "latitude": 42.221721,
            "longitude": -71.024682,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "2b66fa6c-abeb-4e5d-9067-cb3a36355bf8",
            "territory": "Massachusetts",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -121.955387,
                38.368367
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "212 Nut Tree Rd",
            "city": "Vacaville",
            "country": "US",
            "latitude": 38.368367,
            "longitude": -121.955387,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "e2ddb04e-3a5d-41c2-915c-b81f4dbd46a8",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -118.3503038,
                33.8330252
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "21540 Hawthorne Blvd #554",
            "city": "Torrance",
            "country": "US",
            "latitude": 33.8330252,
            "longitude": -118.3503038,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "872c34ba-f298-4e34-a1ef-a26f7d815358",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -122.4070596,
                37.7842192
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "865 Market St Suite #223",
            "city": "San Francisco",
            "country": "US",
            "latitude": 37.7842192,
            "longitude": -122.4070596,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "d29eb39a-c1ff-4f27-92a7-feb84c04f511",
            "territory": "California",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -82.326119,
                27.932533
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "432 Brandon Town Center M",
            "city": "Brandon",
            "country": "US",
            "latitude": 27.932533,
            "longitude": -82.326119,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "6ce8f5d4-fe00-4fc4-b082-5ce08f0042bd",
            "territory": "Florida",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -85.622392,
                38.247943
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "5000 Shelbyville Rd #1700",
            "city": "Louisville",
            "country": "US",
            "latitude": 38.247943,
            "longitude": -85.622392,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "52989405-9352-4b34-8676-cd4b887d045a",
            "territory": "Kentucky",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -73.613847,
                40.738488
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "630 Old Country Road",
            "address2": "Space 1041B",
            "city": "Garden City",
            "country": "US",
            "latitude": 40.738488,
            "longitude": -73.613847,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "7181ccf0-80f9-4c00-b9ef-7c52f5aecc6a",
            "territory": "New York",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -72.145135,
                41.374121
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "850 Hartford Tpke",
            "address2": "Space L114A",
            "city": "Waterford",
            "country": "US",
            "latitude": 41.374121,
            "longitude": -72.145135,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "424e1fb9-b2a3-4f41-ad2f-afb44d7a48ca",
            "territory": "Connecticut",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -96.819286,
                32.928853
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "13350 Dallas Pkwy #2150",
            "city": "Dallas",
            "country": "US",
            "latitude": 32.928853,
            "longitude": -96.819286,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "1e33b1f6-44bd-44ad-9cd5-2300e24d592a",
            "territory": "Texas",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -71.053554,
                42.360308
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "200 State St C1",
            "address2": "C2",
            "city": "Boston",
            "country": "US",
            "latitude": 42.360308,
            "longitude": -71.053554,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "c62d902d-2235-4d17-8941-94a914204685",
            "territory": "Massachusetts",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -78.763467,
                42.913345
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "1 Walden Galleria",
            "address2": "Space G207",
            "city": "Buffalo",
            "country": "US",
            "latitude": 42.913345,
            "longitude": -78.763467,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "1e6650cf-a78a-4906-8d5e-72d5ef5ba431",
            "territory": "New York",
            "type": "physical"
        },
        "type": "Feature"
    },
    {
        "geometry": {
            "coordinates": [
                -93.212883,
                44.815818
            ],
            "type": "Point"
        },
        "properties": {
            "id": uuid(),
            "address1": "3945 Eagan Outlets Pkwy #1040",
            "city": "Eagan",
            "country": "US",
            "latitude": 44.815818,
            "longitude": -93.212883,
            "merchantId": "9c230d7f-aba8-4927-84ea-dabc9ac85965",
            "name": "Aerie - US",
            "paymentMethod": "gift card",
            "redeemType": "barcode",
            "source": "CTXSpend",
            "sourceId": "4a82549d-8d75-490f-af05-747d4e0c1afb",
            "territory": "Minnesota",
            "type": "physical"
        },
        "type": "Feature"
    }
]