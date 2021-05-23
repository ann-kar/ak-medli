Wyjaśnienia:

1. Dlaczego breakpoint akurat na 1120?
Podstawowy margines od komponentów wynosił 24px po obu stronach.

Jeśli chcemy zacząć płynnie zwiększać margines od width = X tak, żeby 
przy width = 1400px margines wynosił 165px po obu stronach (uwzględniając bazowe 2 x 24),
to trzeba zacząć od 1400 - 2 x 165 + 2 x 24 = 1120 (w przybliżeniu).

