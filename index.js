console.log("....".match(/^\w{4,6}$/));


/*
  assertions: boundaries
    ^  beginning of line
    $  end of line
    \b word character
    \B non-word character

  character classes: 
    [a-z]
    [^a-z]
    .
    \d <=> [0-9]
    \D <=> [^0-9]
    \w <=> [a-zA-Z_]
    \W <=> [^a-zA-Z_]

  quantifiers
    x*
    x+
    x?
    {n}
    {n,}
    {n,m}
*/
