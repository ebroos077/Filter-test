const stateMap = {
  'alabama':'al','alaska':'ak','arizona':'az','arkansas':'ar','california':'ca',
  'colorado':'co','connecticut':'ct','delaware':'de','florida':'fl','georgia':'ga',
  'hawaii':'hi','idaho':'id','illinois':'il','indiana':'in','iowa':'ia',
  'kansas':'ks','kentucky':'ky','louisiana':'la','maine':'me','maryland':'md',
  'massachusetts':'ma','michigan':'mi','minnesota':'mn','mississippi':'ms','missouri':'mo',
  'montana':'mt','nebraska':'ne','nevada':'nv','new hampshire':'nh','new jersey':'nj',
  'new mexico':'nm','new york':'ny','north carolina':'nc','north dakota':'nd','ohio':'oh',
  'oklahoma':'ok','oregon':'or','pennsylvania':'pa','rhode island':'ri','south carolina':'sc',
  'south dakota':'sd','tennessee':'tn','texas':'tx','utah':'ut','vermont':'vt',
  'virginia':'va','washington':'wa','west virginia':'wv','wisconsin':'wi','wyoming':'wy'
};

const houses = [
  {proptype:"Single-Family Home",       city:"Las Vegas, NV",      loanamt:420000,   loan:"Conventional", rate:6.75, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-1"},
  {proptype:"Condo",                    city:"Henderson, NV",      loanamt:310000,   loan:"FHA",           rate:6.25, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-2"},
  {proptype:"Townhouse",                city:"Reno, NV",           loanamt:550000,   loan:"Conventional", rate:7.00, refi:true,  type:"Brokered Loan", term:15, link:"https://bluecactuslending.com/casestudy-3"},
  {proptype:"Single-Family Home",       city:"Los Angeles, CA",    loanamt:890000,   loan:"Conventional", rate:6.90, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-4"},
  {proptype:"Multi-Family (2-4 Units)", city:"Phoenix, AZ",        loanamt:275000,   loan:"VA",            rate:5.75, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-5"},
  {proptype:"Single-Family Home",       city:"Denver, CO",         loanamt:495000,   loan:"FHA",           rate:6.50, refi:true,  type:"Funded Loan",   term:20, link:"https://bluecactuslending.com/casestudy-6"},
  {proptype:"Single-Family Home",       city:"Austin, TX",         loanamt:620000,   loan:"Hard Money",    rate:10.50,refi:false, type:"Brokered Loan", term:10, link:"https://bluecactuslending.com/casestudy-7"},
  {proptype:"Condo",                    city:"Seattle, WA",        loanamt:780000,   loan:"VA",            rate:5.90, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-8"},
  {proptype:"Townhouse",                city:"Las Vegas, NV",      loanamt:380000,   loan:"FHA",           rate:6.10, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-9"},
  {proptype:"Single-Family Home",       city:"Henderson, NV",      loanamt:525000,   loan:"Conventional", rate:6.80, refi:true,  type:"Funded Loan",   term:15, link:"https://bluecactuslending.com/casestudy-10"},
  {proptype:"Multi-Family (2-4 Units)", city:"Phoenix, AZ",        loanamt:299000,   loan:"VA",            rate:5.50, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-11"},
  {proptype:"Single-Family Home",       city:"Scottsdale, AZ",     loanamt:710000,   loan:"Conventional", rate:7.10, refi:true,  type:"Funded Loan",   term:20, link:"https://bluecactuslending.com/casestudy-12"},
  {proptype:"Single-Family Home",       city:"Los Angeles, CA",    loanamt:1200000,  loan:"Hard Money",    rate:10.00,refi:false, type:"Brokered Loan", term:10, link:"https://bluecactuslending.com/casestudy-13"},
  {proptype:"Single-Family Home",       city:"San Diego, CA",      loanamt:950000,   loan:"Conventional", rate:6.95, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-14"},
  {proptype:"Manufactured Home",        city:"Salt Lake City, UT", loanamt:415000,   loan:"FHA",           rate:6.30, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-15"},
  {proptype:"Single-Family Home",       city:"Denver, CO",         loanamt:560000,   loan:"Conventional", rate:6.75, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-16"},
  {proptype:"Condo",                    city:"Chicago, IL",        loanamt:330000,   loan:"FHA",           rate:6.40, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-17"},
  {proptype:"Single-Family Home",       city:"Austin, TX",         loanamt:480000,   loan:"VA",            rate:5.80, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-18"},
  {proptype:"Townhouse",                city:"Houston, TX",        loanamt:275000,   loan:"FHA",           rate:6.20, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-19"},
  {proptype:"Single-Family Home",       city:"Miami, FL",          loanamt:875000,   loan:"Hard Money",    rate:11.00,refi:false, type:"Funded Loan",   term:10, link:"https://bluecactuslending.com/casestudy-20"},
  {proptype:"Single-Family Home",       city:"Atlanta, GA",        loanamt:390000,   loan:"Conventional", rate:6.60, refi:true,  type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-21"},
  {proptype:"Townhouse",                city:"Charlotte, NC",      loanamt:345000,   loan:"VA",            rate:5.65, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-22"},
  {proptype:"Condo",                    city:"Seattle, WA",        loanamt:820000,   loan:"Conventional", rate:7.05, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-23"},
  {proptype:"Single-Family Home",       city:"Portland, OR",       loanamt:510000,   loan:"FHA",           rate:6.45, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-24"},
  {proptype:"Single-Family Home",       city:"Reno, NV",           loanamt:320000,   loan:"Conventional", rate:6.55, refi:true,  type:"Brokered Loan", term:15, link:"https://bluecactuslending.com/casestudy-25"},
  {proptype:"Manufactured Home",        city:"Tucson, AZ",         loanamt:260000,   loan:"FHA",           rate:6.15, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-26"},
  {proptype:"Single-Family Home",       city:"Sacramento, CA",     loanamt:590000,   loan:"Conventional", rate:6.90, refi:true,  type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-27"},
  {proptype:"Single-Family Home",       city:"Denver, CO",         loanamt:675000,   loan:"Construction",  rate:8.25, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-29"},
  {proptype:"Single-Family Home",       city:"Las Vegas, NV",      loanamt:445000,   loan:"Construction",  rate:8.50, refi:false, type:"Brokered Loan", term:25, link:"https://bluecactuslending.com/casestudy-30"},
  {proptype:"Single-Family Home",       city:"Nashville, TN",      loanamt:520000,   loan:"Conventional", rate:6.85, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-31"},
  {proptype:"Townhouse",                city:"Phoenix, AZ",        loanamt:388000,   loan:"FHA",           rate:6.35, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-32"},
  {proptype:"Apartment Complex (5+ Units)", city:"Chicago, IL",    loanamt:740000,   loan:"Construction",  rate:9.00, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-33"},
  {proptype:"Single-Family Home",       city:"Portland, OR",       loanamt:615000,   loan:"VA",            rate:5.70, refi:true,  type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-34"},
  {proptype:"Single-Family Home",       city:"Miami, FL",          loanamt:980000,   loan:"Hard Money",    rate:11.25,refi:false, type:"Funded Loan",   term:10, link:"https://bluecactuslending.com/casestudy-35"},
  {proptype:"Single-Family Home",       city:"Austin, TX",         loanamt:535000,   loan:"Construction",  rate:8.75, refi:false, type:"Brokered Loan", term:25, link:"https://bluecactuslending.com/casestudy-36"},
  {proptype:"Single-Family Home",       city:"Salt Lake City, UT", loanamt:470000,   loan:"Conventional", rate:6.70, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-37"},
  {proptype:"Multi-Family (2-4 Units)", city:"Tucson, AZ",         loanamt:290000,   loan:"FHA",           rate:6.20, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-38"},
  {proptype:"Single-Family Home",       city:"San Francisco, CA",  loanamt:1450000,  loan:"Conventional", rate:7.15, refi:true,  type:"Funded Loan",   term:15, link:"https://bluecactuslending.com/casestudy-39"},
  {proptype:"Single-Family Home",       city:"Reno, NV",           loanamt:365000,   loan:"Construction",  rate:8.90, refi:false, type:"Brokered Loan", term:25, link:"https://bluecactuslending.com/casestudy-40"},
  {proptype:"Single-Family Home",       city:"Houston, TX",        loanamt:310000,   loan:"VA",            rate:5.60, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-41"},
  {proptype:"Condo",                    city:"Tampa, FL",          loanamt:580000,   loan:"Conventional", rate:6.80, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-42"},
  {proptype:"Single-Family Home",       city:"Charlotte, NC",      loanamt:425000,   loan:"Construction",  rate:8.40, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-43"},
  {proptype:"Single-Family Home",       city:"Henderson, NV",      loanamt:495000,   loan:"Conventional", rate:6.65, refi:true,  type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-44"},
  {proptype:"Single-Family Home",       city:"Seattle, WA",        loanamt:865000,   loan:"Conventional", rate:7.00, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-45"},
  {proptype:"Apartment Complex (5+ Units)", city:"Scottsdale, AZ", loanamt:760000,   loan:"Construction",  rate:9.10, refi:false, type:"Brokered Loan", term:25, link:"https://bluecactuslending.com/casestudy-46"},
  {proptype:"Single-Family Home",       city:"San Diego, CA",      loanamt:1100000,  loan:"Conventional", rate:6.95, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-47"},
  {proptype:"Townhouse",                city:"Dallas, TX",         loanamt:450000,   loan:"FHA",           rate:6.40, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-48"},
  {proptype:"Office Building",          city:"Los Angeles, CA",    loanamt:2100000,  loan:"Commercial",    rate:7.50, refi:false, type:"Funded Loan",   term:20, link:"https://bluecactuslending.com/casestudy-49"},
  {proptype:"Retail / Storefront",      city:"Las Vegas, NV",      loanamt:1850000,  loan:"Commercial",    rate:7.25, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-50"},
  {proptype:"Office Building",          city:"Phoenix, AZ",        loanamt:3200000,  loan:"Commercial",    rate:7.80, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-51"},
  {proptype:"Mixed-Use Building",       city:"San Francisco, CA",  loanamt:4500000,  loan:"Commercial",    rate:8.10, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-52"},
  {proptype:"Warehouse / Industrial",   city:"Houston, TX",        loanamt:1600000,  loan:"Commercial",    rate:7.30, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-53"},
  {proptype:"Office Building",          city:"Denver, CO",         loanamt:2750000,  loan:"Commercial",    rate:7.65, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-54"},
  {proptype:"Retail / Storefront",      city:"Atlanta, GA",        loanamt:1950000,  loan:"Commercial",    rate:7.40, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-55"},
  {proptype:"Mixed-Use Building",       city:"Chicago, IL",        loanamt:5200000,  loan:"Commercial",    rate:8.25, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-56"},
  {proptype:"Retail / Storefront",      city:"Miami, FL",          loanamt:2300000,  loan:"Commercial",    rate:7.55, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-57"},
  {proptype:"Warehouse / Industrial",   city:"Seattle, WA",        loanamt:3800000,  loan:"Commercial",    rate:7.90, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-58"},
  {proptype:"Warehouse / Industrial",   city:"Dallas, TX",         loanamt:1400000,  loan:"Commercial",    rate:7.10, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-59"},
  {proptype:"Mixed-Use Building",       city:"San Diego, CA",      loanamt:2900000,  loan:"Commercial",    rate:7.70, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-60"},
  {proptype:"Office Building",          city:"Austin, TX",         loanamt:3100000,  loan:"Commercial",    rate:7.85, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-61"},
  {proptype:"Retail / Storefront",      city:"Portland, OR",       loanamt:1750000,  loan:"Commercial",    rate:7.35, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-62"},
  {proptype:"Apartment Complex (5+ Units)", city:"Tampa, FL",      loanamt:2600000,  loan:"Commercial",    rate:7.60, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-63"},
  {proptype:"Office Building",          city:"Charlotte, NC",      loanamt:1900000,  loan:"Commercial",    rate:7.45, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-64"},
  {proptype:"Warehouse / Industrial",   city:"Henderson, NV",      loanamt:1300000,  loan:"Commercial",    rate:7.20, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-65"},
  {proptype:"Hotel / Motel",            city:"Nashville, TN",      loanamt:4100000,  loan:"Commercial",    rate:8.00, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-66"},
  {proptype:"Retail / Storefront",      city:"Sacramento, CA",     loanamt:1650000,  loan:"Commercial",    rate:7.30, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-67"},
  {proptype:"Hotel / Motel",            city:"Salt Lake City, UT", loanamt:2200000,  loan:"Commercial",    rate:7.55, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-68"},
  {proptype:"Single-Family Home",       city:"Orlando, FL",        loanamt:410000,   loan:"Conventional", rate:6.70, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-69"},
  {proptype:"Condo",                    city:"Las Vegas, NV",      loanamt:295000,   loan:"FHA",           rate:6.20, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-70"},
  {proptype:"Single-Family Home",       city:"Phoenix, AZ",        loanamt:480000,   loan:"Conventional", rate:6.85, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-71"},
  {proptype:"Townhouse",                city:"Denver, CO",         loanamt:520000,   loan:"VA",            rate:5.65, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-72"},
  {proptype:"Single-Family Home",       city:"Boise, ID",          loanamt:390000,   loan:"Conventional", rate:6.60, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-73"},
  {proptype:"Multi-Family (2-4 Units)", city:"Atlanta, GA",        loanamt:540000,   loan:"FHA",           rate:6.35, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-74"},
  {proptype:"Single-Family Home",       city:"Albuquerque, NM",    loanamt:310000,   loan:"VA",            rate:5.55, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-75"},
  {proptype:"Condo",                    city:"San Diego, CA",      loanamt:720000,   loan:"Conventional", rate:7.00, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-76"},
  {proptype:"Single-Family Home",       city:"Memphis, TN",        loanamt:265000,   loan:"FHA",           rate:6.25, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-77"},
  {proptype:"Single-Family Home",       city:"Colorado Springs, CO",loanamt:455000,  loan:"Conventional", rate:6.75, refi:true,  type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-78"},
  {proptype:"Townhouse",                city:"Tampa, FL",          loanamt:385000,   loan:"FHA",           rate:6.30, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-79"},
  {proptype:"Single-Family Home",       city:"Kansas City, MO",    loanamt:300000,   loan:"Conventional", rate:6.55, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-80"},
  {proptype:"Single-Family Home",       city:"Jacksonville, FL",   loanamt:340000,   loan:"VA",            rate:5.70, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-81"},
  {proptype:"Manufactured Home",        city:"Phoenix, AZ",        loanamt:220000,   loan:"FHA",           rate:6.10, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-82"},
  {proptype:"Single-Family Home",       city:"Minneapolis, MN",    loanamt:430000,   loan:"Conventional", rate:6.80, refi:true,  type:"Funded Loan",   term:15, link:"https://bluecactuslending.com/casestudy-83"},
  {proptype:"Condo",                    city:"Austin, TX",         loanamt:510000,   loan:"Conventional", rate:6.90, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-84"},
  {proptype:"Single-Family Home",       city:"Omaha, NE",          loanamt:285000,   loan:"FHA",           rate:6.20, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-85"},
  {proptype:"Single-Family Home",       city:"Louisville, KY",     loanamt:310000,   loan:"Conventional", rate:6.65, refi:true,  type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-86"},
  {proptype:"Multi-Family (2-4 Units)", city:"Seattle, WA",        loanamt:890000,   loan:"Conventional", rate:7.05, refi:false, type:"Funded Loan",   term:20, link:"https://bluecactuslending.com/casestudy-87"},
  {proptype:"Single-Family Home",       city:"Richmond, VA",       loanamt:420000,   loan:"VA",            rate:5.75, refi:true,  type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-88"},
  {proptype:"Single-Family Home",       city:"Tucson, AZ",         loanamt:330000,   loan:"Construction",  rate:8.50, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-89"},
  {proptype:"Townhouse",                city:"Nashville, TN",      loanamt:560000,   loan:"Conventional", rate:6.95, refi:true,  type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-90"},
  {proptype:"Single-Family Home",       city:"El Paso, TX",        loanamt:255000,   loan:"FHA",           rate:6.15, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-91"},
  {proptype:"Single-Family Home",       city:"Raleigh, NC",        loanamt:495000,   loan:"Conventional", rate:6.70, refi:true,  type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-92"},
  {proptype:"Condo",                    city:"Miami, FL",          loanamt:640000,   loan:"Conventional", rate:7.10, refi:false, type:"Funded Loan",   term:20, link:"https://bluecactuslending.com/casestudy-93"},
  {proptype:"Single-Family Home",       city:"Spokane, WA",        loanamt:360000,   loan:"VA",            rate:5.60, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-94"},
  {proptype:"Single-Family Home",       city:"Indianapolis, IN",   loanamt:295000,   loan:"FHA",           rate:6.30, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-95"},
  {proptype:"Apartment Complex (5+ Units)", city:"Denver, CO",     loanamt:1100000,  loan:"Construction",  rate:9.25, refi:false, type:"Brokered Loan", term:25, link:"https://bluecactuslending.com/casestudy-96"},
  {proptype:"Single-Family Home",       city:"Fresno, CA",         loanamt:380000,   loan:"Conventional", rate:6.85, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-97"},
  {proptype:"Single-Family Home",       city:"Columbus, OH",       loanamt:315000,   loan:"VA",            rate:5.65, refi:true,  type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-98"},
  {proptype:"Townhouse",                city:"San Antonio, TX",    loanamt:340000,   loan:"FHA",           rate:6.25, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-99"},
  {proptype:"Single-Family Home",       city:"Boise, ID",          loanamt:470000,   loan:"Construction",  rate:8.75, refi:false, type:"Brokered Loan", term:25, link:"https://bluecactuslending.com/casestudy-100"},
  {proptype:"Office Building",          city:"Nashville, TN",      loanamt:2200000,  loan:"Commercial",    rate:7.55, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-101"},
  {proptype:"Retail / Storefront",      city:"Phoenix, AZ",        loanamt:1750000,  loan:"Commercial",    rate:7.30, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-102"},
  {proptype:"Single-Family Home",       city:"Tucson, AZ",         loanamt:285000,   loan:"VA",            rate:5.80, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-103"},
  {proptype:"Mixed-Use Building",       city:"Denver, CO",         loanamt:3100000,  loan:"Commercial",    rate:7.80, refi:false, type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-104"},
  {proptype:"Single-Family Home",       city:"Oklahoma City, OK",  loanamt:270000,   loan:"FHA",           rate:6.20, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-105"},
  {proptype:"Condo",                    city:"Portland, OR",       loanamt:490000,   loan:"Conventional", rate:6.95, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-106"},
  {proptype:"Warehouse / Industrial",   city:"Phoenix, AZ",        loanamt:2100000,  loan:"Commercial",    rate:7.40, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-107"},
  {proptype:"Single-Family Home",       city:"Reno, NV",           loanamt:540000,   loan:"Conventional", rate:6.90, refi:true,  type:"Brokered Loan", term:15, link:"https://bluecactuslending.com/casestudy-108"},
  {proptype:"Single-Family Home",       city:"Bakersfield, CA",    loanamt:340000,   loan:"FHA",           rate:6.35, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-109"},
  {proptype:"Hotel / Motel",            city:"Las Vegas, NV",      loanamt:5800000,  loan:"Commercial",    rate:8.20, refi:false, type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-110"},
  {proptype:"Single-Family Home",       city:"Chandler, AZ",       loanamt:510000,   loan:"Conventional", rate:6.75, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-111"},
  {proptype:"Multi-Family (2-4 Units)", city:"Las Vegas, NV",      loanamt:620000,   loan:"Hard Money",    rate:10.75,refi:false, type:"Brokered Loan", term:10, link:"https://bluecactuslending.com/casestudy-112"},
  {proptype:"Single-Family Home",       city:"Gilbert, AZ",        loanamt:560000,   loan:"Conventional", rate:6.80, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-113"},
  {proptype:"Townhouse",                city:"Aurora, CO",         loanamt:430000,   loan:"FHA",           rate:6.40, refi:true,  type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-114"},
  {proptype:"Single-Family Home",       city:"Tempe, AZ",          loanamt:490000,   loan:"VA",            rate:5.85, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-115"},
  {proptype:"Office Building",          city:"Seattle, WA",        loanamt:4200000,  loan:"Commercial",    rate:7.95, refi:true,  type:"Brokered Loan", term:20, link:"https://bluecactuslending.com/casestudy-116"},
  {proptype:"Single-Family Home",       city:"Glendale, AZ",       loanamt:420000,   loan:"FHA",           rate:6.30, refi:true,  type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-117"},
  {proptype:"Single-Family Home",       city:"North Las Vegas, NV",loanamt:395000,   loan:"Conventional", rate:6.65, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-118"},
  {proptype:"Retail / Storefront",      city:"Denver, CO",         loanamt:2400000,  loan:"Commercial",    rate:7.60, refi:false, type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-119"},
  {proptype:"Single-Family Home",       city:"Peoria, AZ",         loanamt:445000,   loan:"VA",            rate:5.70, refi:true,  type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-120"},
  {proptype:"Manufactured Home",        city:"Henderson, NV",      loanamt:245000,   loan:"FHA",           rate:6.10, refi:false, type:"Funded Loan",   term:30, link:"https://bluecactuslending.com/casestudy-121"},
  {proptype:"Single-Family Home",       city:"Surprise, AZ",       loanamt:415000,   loan:"Conventional", rate:6.70, refi:false, type:"Brokered Loan", term:30, link:"https://bluecactuslending.com/casestudy-122"},
  {proptype:"Apartment Complex (5+ Units)", city:"Las Vegas, NV",  loanamt:3400000,  loan:"Commercial",    rate:7.75, refi:true,  type:"Funded Loan",   term:25, link:"https://bluecactuslending.com/casestudy-123"},
  {proptype:"Single-Family Home",       city:"Mesa, AZ",           loanamt:460000,   loan:"Construction",  rate:8.60, refi:false, type:"Brokered Loan", term:25, link:"https://bluecactuslending.com/casestudy-124"},
];

const badgeClass = {
  Conventional:  "badge-conv",
  FHA:           "badge-fha",
  VA:            "badge-va",
  "Hard Money":  "badge-hard",
  Construction:  "badge-construct",
  Commercial:    "badge-commercial",
};

const typeClass = {
  "Brokered Loan": "badge-brokered",
  "Funded Loan":   "badge-funded",
};

const PAGE_SIZE = 8;
let currentPage = 1;
let filteredList = [];

function filter() {
  const lt     = document.getElementById("loan-filter");
  const tp     = document.getElementById("type-filter");
  const rf     = document.getElementById("refi-filter");
  const st     = document.getElementById("sort-filter").value;
  const tm     = document.getElementById("term-filter");
  const pt     = document.getElementById("property-filter");
  const search = document.getElementById("search");

  filteredList = houses.filter(h => {
    if (lt.value !== "all" && h.loan !== lt.value) return false;
    if (tp.value !== "all" && h.type !== tp.value) return false;
    if (rf.value === "yes" && !h.refi) return false;
    if (rf.value === "no" && h.refi) return false;
    if (tm.value !== "all" && h.term !== parseInt(tm.value)) return false;
    if (pt.value !== "all" && h.proptype !== pt.value) return false;
    const query = search.value.toLowerCase();
    if (query) {
      const cityMatch = h.city.toLowerCase().includes(query);
      const abbr = h.city.split(', ')[1]?.toLowerCase();
      const fullState = Object.keys(stateMap).find(k => stateMap[k] === abbr);
      const stateMatch = fullState ? fullState.startsWith(query) : false;
      const propMatch = h.proptype.toLowerCase().includes(query);
      if (!cityMatch && !stateMatch && !propMatch) return false;
    }
    return true;
  });

  if      (st === "loanamt-asc")  filteredList.sort((a, b) => a.loanamt - b.loanamt);
  else if (st === "loanamt-desc") filteredList.sort((a, b) => b.loanamt - a.loanamt);
  else if (st === "rate-asc")     filteredList.sort((a, b) => a.rate - b.rate);
  else if (st === "rate-desc")    filteredList.sort((a, b) => b.rate - a.rate);
  else if (st === "term-asc")     filteredList.sort((a, b) => a.term - b.term);
  else if (st === "term-desc")    filteredList.sort((a, b) => b.term - a.term);

  currentPage = 1;
  renderCards();
}

function renderCards() {
  const container = document.getElementById("cards");
  const btn       = document.getElementById("load-more-btn");
  const visible   = filteredList.slice(0, currentPage * PAGE_SIZE);

  document.getElementById("count").textContent =
    `Showing ${visible.length} of ${filteredList.length} propert${filteredList.length === 1 ? "y" : "ies"}`;

  document.getElementById("hero-count").textContent = filteredList.length;

  if (!filteredList.length) {
    container.innerHTML = '<div class="no-results">No properties match your filters</div>';
    btn.style.display = "none";
    return;
  }

  container.innerHTML = visible.map(h => `
    <a href="${h.link}" target="_blank" class="card">
      <div class="card-header">
        <div>
          <div class="card-proptype">${h.proptype}</div>
          <div class="card-city">${h.city}</div>
        </div>
        ${h.refi ? '<span class="badge badge-refi">Refi</span>' : ''}
      </div>
      <span class="badge ${badgeClass[h.loan]}">${h.loan}</span>
      <span class="badge ${typeClass[h.type]}">${h.type}</span>
      <div class="card-row"><span>Loan Amount</span><span>$${h.loanamt.toLocaleString()}</span></div>
      <div class="card-row"><span>Rate</span><span>${h.rate.toFixed(2)}%</span></div>
      <div class="card-row"><span>Loan term</span><span>${h.term} years</span></div>
    </a>
  `).join("");

  btn.style.display = visible.length >= filteredList.length ? "none" : "inline-block";
}

<a href="https://www.fidelispf.com/">Fidelis Private Fund</a>

function loadMore() {
  currentPage++;
  renderCards();
}

function resetFilters() {
  document.getElementById("search").value = "";
  document.getElementById("type-filter").value = "all";
  document.getElementById("loan-filter").value = "all";
  document.getElementById("term-filter").value = "all";
  document.getElementById("refi-filter").value = "all";
  document.getElementById("property-filter").value = "all";
  document.getElementById("sort-filter").value = "loanamt-asc";
  filter();
}

// Wait for the page to finish loading before running, so this works
// no matter where the <script> tag is placed in the HTML.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", filter);
} else {
  filter();
}
