firstNames = Array.new
lastNames = Array.new
phoneNumbers = Array.new
addresses = Array.new
webs = Array.new
k=0
File.open("Text/data.txt", "r") do |file|
  for line in file.readlines()
    str = line.strip()
    str = str.split(",")
    firstNames[k] = str[0];
    lastNames[k] = str[1];
    phoneNumbers[k] = str[2];
    addresses[k] = str[3];
    webs[k] = str[4];
    k+=1
  end
end
k-=1;
for i in 0..4 do
  case i
  when 0
    puts ("|  First Names #{0}  |")
    for j in 0..k do
      puts(firstNames[j])
    end
  when 1
    puts ("|  Last Names #{1}  |")
    for j in 0..k do
      puts(lastNames[j])
    end
  when 2
    puts ("|  Phone Numbers #{2}  |")
    for j in 0..k do
      puts(phoneNumbers[j])
    end
  when 3
    puts ("|  Addresses #{3}  |")
    for j in 0..k do
      puts(addresses[j])
    end
    when 4
      puts ("|  Webs #{4}  |")
      for j in 0..k do
        puts(webs[j])
      end
    end
end
puts ("По какому критерую необходима сортировка?")
print ("Введите номер столбца.. :\n")
value = gets.chomp()
ans = ""
case value
when 0
  arr = firstNames.sort
  for i in 0..k do
    value = firstNames.index(arr[i]).to_i
    ans += (firstNames[value] + ", " + lastNames[value] + ", " + phoneNumbers[value] + ", " + addresses[value] + ", " + webs[value] + "\n")
  end
  File.open("Text/data_sorted_by_firstNames.txt" , "w") do |file|
    file.write(ans)
end
when 1
  arr = lastNames.sort
  for i in 0..k do
    value = lastNames.index(arr[i]).to_i
    ans += (firstNames[value] + ", " + lastNames[value] + ", " + phoneNumbers[value] + ", " + addresses[value] + ", " + webs[value] + "\n")
  end
  File.open("Text/data_sorted_by_lastNames.txt" , "w") do |file|
    file.write(ans)
end
when 2
  arr = phoneNumbers.sort
  for i in 0..k do
    value = phoneNumbers.index(arr[i]).to_i
    ans += (firstNames[value] + ", " + lastNames[value] + ", " + phoneNumbers[value] + ", " + addresses[value] + ", " + webs[value] + "\n")
  end
  File.open("Text/data_sorted_by_phoneNumbers.txt" , "w") do |file|
    file.write(ans)
end
when 3
  arr = addresses.sort
  for i in 0..k do
    value = addresses.index(arr[i]).to_i
    ans += (firstNames[value] + ", " + lastNames[value] + ", " + phoneNumbers[value] + ", " + addresses[value] + ", " + webs[value] + "\n")
  end
  File.open("Text/data_sorted_by_addresses.txt" , "w") do |file|
    file.write(ans)
end
when 4
  arr = webs.sort
  for i in 0..k do
    value = webs.index(arr[i]).to_i
    ans += (firstNames[value] + ", " + lastNames[value] + ", " + phoneNumbers[value] + ", " + addresses[value] + ", " + webs[value] + "\n")
  end
  File.open("Text/data_sorted_by_webs.txt" , "w") do |file|
    file.write(ans)
end
end
