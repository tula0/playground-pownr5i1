interface Country {
    Country: string;
    Slug: string;
    ISO2: string;
}


interface CountryStatus {
Country: string;
CountryCode: string;
Province: string;
City: string;
CityCode: string;
Lat: string;
Lon: string;
Confirmed: Number;
Deaths: Number;
Recovered: Number;
Active: Number;
Date: Date;
}

export {
    Country, CountryStatus
};

/*
function printLabel(country: Country) {
  console.log(country.Country);
}

let myObj = { Country: 'Belize', Slug: 'belize', ISO2: 'BZ' };
printLabel(myObj);
*/
/*
{"Country":"Belize","Slug":"belize","ISO2":"BZ"},
{"Country":"Burundi","Slug":"burundi","ISO2":"BI"},
{"Country":"Svalbard and Jan Mayen Islands","Slug":"svalbard-and-jan-mayen-islands","ISO2":"SJ"}
*/

/*
CountrySlug: https://api.covid19api.com/dayone/country/belize
// tslint:disable-next-line: max-line-length
// tslint:disable-next-line: max-line-length
{"Country":"Belize","CountryCode":"BZ","Province":"","City":"","CityCode":"",
"Lat":"17.19","Lon":"-88.5","Confirmed":1,"Deaths":0,"Recovered":0,"Active":1,
"Date":"2020-03-23T00:00:00Z"},{"Country":"Belize","CountryCode":"BZ","Province":"",
"City":"","CityCode":"","Lat":"17.19","Lon":"-88.5","Confirmed":1,"Deaths":0,"Recovered":0,"Active":1,"Date":"2020-03-24T00:00:00Z"}
*/

