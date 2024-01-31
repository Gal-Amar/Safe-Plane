import json
result = dict()
with open("countries.min.json", "r") as file:
  raw = json.load(file)
  raw = raw["countries"][0]
  
  for line in raw:
    result[line] = []
    for city in raw[line]:
      if not f"{line}, {city}" in result[line]:
        if city.startswith("`"):
          result[line].append(f"{line}, {city[1:]}")
        else:
          result[line].append(f"{line}, {city}")

print(result["Israel"])

#with open("countries.json", "w") as output:
#   json.dump(result, output)