import json
result = list()
with open("countries.json", "r") as file:
  raw = json.load(file)["countries"]

  for country in raw:
    country_name = country["countryname"]
    cities = country["cities"]
    result.append(country_name)
    for city in cities:
      result.append(city)

with open("countries.min.json", "w") as output:
  json.dump(result, output)