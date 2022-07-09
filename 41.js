//object destructering

const band = {
    name:"led zepplin",
    famousSong: "sbfjfj",
    year:2012
}

// const bandName=band.name;
// const famousSong = band.famousSong;
// console.log(bandName);
// console.log(famousSong);

const {name:var1,...restProps}=band;
console.log(restProps);
