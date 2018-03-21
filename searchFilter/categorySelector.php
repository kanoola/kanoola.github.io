<div><a href="/categorySelector.php?Retail=true">Retail</a></div>
<div><a href="/categorySelector.php?HospitalityRestaurant=true">Hospitality & Restauranct</a></div>
<div><a href="/categorySelector.php?ManagementExec=true">Management & Exec</a></div>
<div><a href="/categorySelector.php?Healthcare=true">Healthcare</a></div>
<div><a href="/categorySelector.php?AccountingFinance=true">Accounting & Finance</a></div>
<div><a href="/categorySelector.php?InformationTechnology=true">Information Technology</a></div>




<?php

if (isset($_GET['Retail']))  {

    header("Location: /index.php?Retail=true");
    exit();
}

if (isset($_GET['HospitalityRestaurant']))  {

    header("Location: /index.php?HospitalityRestaurant=true");
    exit();
}

if (isset($_GET['ManagementExec']))  {

    header("Location: /index.php?ManagementExec=true");
    exit();
}

if (isset($_GET['Healthcare']))  {

    header("Location: /index.php?Healthcare=true");
    exit();
}

if (isset($_GET['AccountingFinance']))  {

    header("Location: /index.php?AccountingFinance=true");
    exit();
}

if (isset($_GET['InformationTechnology']))  {

    header("Location: /index.php?InformationTechnology=true");
    exit();
}



?>