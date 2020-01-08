function howManyDalmations($number){

  $dogs = array("first"=>"Hardly any","second" => "More than a handful!", "third" => "Woah that's a lot of dogs!", "fourth" => "101 DALMATIONS!!!");
  echo ($number <= 10) ? $dogs["first"] : ($number <= 50 )? $dogs["second"] :( $number = 101 )? $dogs["fourth"] : $dogs["third"] ;

}
