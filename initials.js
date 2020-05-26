function abbrevName(name)s{
    var names = name.split(' '),
        initials = names[0].substring(0, 1).toUpperCase() + "."
    console.log(initials)
    if 
        initials += names[names.length - 1].substring(0, 1).toUpperCase()
    console.log(initials)
    return initials
