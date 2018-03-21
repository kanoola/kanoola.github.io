<!DOCTYPE html>
<html>
<head>

    <title>Job Posting Demo</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
    <script type="text/javascript" src="js/transition.js"></script>
    <script type="text/javascript" src="js/collapse.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>

    <link rel="stylesheet" type="text/css" href="css/site.min.css">
    <link rel="stylesheet" type="text/css" href="css/app.css">
    <link rel="stylesheet" type="text/css" href="css/custom.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/table.css">

</head>


<body>
    <div class="container">
        <div id="test"></div>
        <div class="col-md-4 pull-right" z-index="2">
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Job Type
                <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                       <li><a class="load" href="/index.php?fulltime=true">Full Time</a></li>
                       <li><a class="load" href="/index.php?parttime=true">Part Time</a></li>
                       <li><a class="load" href="/index.php?contract=true">Contract</a></li>
                    </ul>
            </div>
            <form action="/index.php?submit=true" method="POST">
                <input type="text" name="input_value">
                <input type="submit" name="submit">
            </form>
        </div>

        <?php

$url = 'example.json'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$jobInfo = json_decode($data); // decode the JSON feed

//HEALTHCARE FILTER

if (isset($_GET['Healthcare'])) 
{   
    $category = 'Healthcare';
    echo '<div class="col-md-8">';
    
 

    foreach($jobInfo as $character)
   
  
    {
                 if($character->type == $category)
             
        {
            echo '<table class="table"><tr class="">'. '<td class="p0"> <div class="media-box pv-xl ph-xl hvr-overlay clickable">' . '<img src="' . $character->logo . '" class="media-box-object img-responsive img-rounded thumb64"><div class="media-box-body pl"><small class="pull-right text-gray">' . $character->datePosted . '</small>' . '<a href="' . $character->jobLink . '" class="h4 media-box-heading link-unstyled">' . $character->jobTitle . '</a>' . '<p class="text-gray text-sm pt-xs"><span class="fa fa-fw fa-briefcase"></span><span>' . $character->employer . '</span>' .  '<span class="mh"></span><a href="'. $character->jobLink . '"class="text-muted"><span class="fa fa-fw fa-map-marker"></span><span>' . $character->location . '</span></a>' . '<span class="mh"></span> <span class="fa fa-fw fa-sitemap"></span><span>' . $character->type . '</span></p><p class="text-sm text-muted">' . $character->description . '</p></div></div></td></tr></table>';
        }
    }
    echo '</div>';
}

//MANAGEMENT FILTER
if (isset($_GET['ManagementExec'])) 
{   
 
    echo '<div class="col-md-8">';
    
 

    foreach($jobInfo as $character)
   
  
    {
                 if($character->type == 'Management & Exec')
             
        {
            echo '<table class="table"><tr class="">'. '<td class="p0"> <div class="media-box pv-xl ph-xl hvr-overlay clickable">' . '<img src="' . $character->logo . '" class="media-box-object img-responsive img-rounded thumb64"><div class="media-box-body pl"><small class="pull-right text-gray">' . $character->datePosted . '</small>' . '<a href="' . $character->jobLink . '" class="h4 media-box-heading link-unstyled">' . $character->jobTitle . '</a>' . '<p class="text-gray text-sm pt-xs"><span class="fa fa-fw fa-briefcase"></span><span>' . $character->employer . '</span>' .  '<span class="mh"></span><a href="'. $character->jobLink . '"class="text-muted"><span class="fa fa-fw fa-map-marker"></span><span>' . $character->location . '</span></a>' . '<span class="mh"></span> <span class="fa fa-fw fa-sitemap"></span><span>' . $character->type . '</span></p><p class="text-sm text-muted">' . $character->description . '</p></div></div></td></tr></table>';
        }
    }
    echo '</div>';
}

//HEALTH CARE FILTER
if (isset($_GET['HospitalityRestaurant'])) 
{   
 
    echo '<div class="col-md-8">';
    
 

    foreach($jobInfo as $character)
   
  
    {
                 if($character->type == 'Hospitality & Restaurant')
             
        {
            echo '<table class="table"><tr class="">'. '<td class="p0"> <div class="media-box pv-xl ph-xl hvr-overlay clickable">' . '<img src="' . $character->logo . '" class="media-box-object img-responsive img-rounded thumb64"><div class="media-box-body pl"><small class="pull-right text-gray">' . $character->datePosted . '</small>' . '<a href="' . $character->jobLink . '" class="h4 media-box-heading link-unstyled">' . $character->jobTitle . '</a>' . '<p class="text-gray text-sm pt-xs"><span class="fa fa-fw fa-briefcase"></span><span>' . $character->employer . '</span>' .  '<span class="mh"></span><a href="'. $character->jobLink . '"class="text-muted"><span class="fa fa-fw fa-map-marker"></span><span>' . $character->location . '</span></a>' . '<span class="mh"></span> <span class="fa fa-fw fa-sitemap"></span><span>' . $character->type . '</span></p><p class="text-sm text-muted">' . $character->description . '</p></div></div></td></tr></table>';
        }
    }
    echo '</div>';
}

//INFORMATION TECH FILTER
if (isset($_GET['InformationTechnology'])) 
{   
 
    echo '<div class="col-md-8">';
    
 

    foreach($jobInfo as $character)
   
  
    {
                 if($character->type == 'Information Technology')
             
        {
           

        
                echo '<table class="table"><tr class="">'. '<td class="p0"> <div class="media-box pv-xl ph-xl hvr-overlay clickable">' . '<img src="' . $character->logo . '" class="media-box-object img-responsive img-rounded thumb64"><div class="media-box-body pl"><small class="pull-right text-gray">' . $character->datePosted . '</small>' . '<a href="' . $character->jobLink . '" class="h4 media-box-heading link-unstyled">' . $character->jobTitle . '</a>' . '<p class="text-gray text-sm pt-xs"><span class="fa fa-fw fa-briefcase"></span><span>' . $character->employer . '</span>' .  '<span class="mh"></span><a href="'. $character->jobLink . '"class="text-muted"><span class="fa fa-fw fa-map-marker"></span><span>' . $character->location . '</span></a>' . '<span class="mh"></span> <span class="fa fa-fw fa-sitemap"></span><span>' . $character->type . '</span></p><p class="text-sm text-muted">' . $character->description . '</p></div></div></td></tr></table>';
        }
    }
    echo '</div>';
}

//ACCOUNTING AND FINANCE FILTER
if (isset($_GET['AccountingFinance'])) 
{   
 
    echo '<div class="col-md-8">';
    
 

    foreach($jobInfo as $character)
   
  
    {
                 if($character->type == 'Accounting & Finance')
             
        {
           

        
                echo '<table class="table"><tr class="">'. '<td class="p0"> <div class="media-box pv-xl ph-xl hvr-overlay clickable">' . '<img src="' . $character->logo . '" class="media-box-object img-responsive img-rounded thumb64"><div class="media-box-body pl"><small class="pull-right text-gray">' . $character->datePosted . '</small>' . '<a href="' . $character->jobLink . '" class="h4 media-box-heading link-unstyled">' . $character->jobTitle . '</a>' . '<p class="text-gray text-sm pt-xs"><span class="fa fa-fw fa-briefcase"></span><span>' . $character->employer . '</span>' .  '<span class="mh"></span><a href="'. $character->jobLink . '"class="text-muted"><span class="fa fa-fw fa-map-marker"></span><span>' . $character->location . '</span></a>' . '<span class="mh"></span> <span class="fa fa-fw fa-sitemap"></span><span>' . $character->type . '</span></p><p class="text-sm text-muted">' . $character->description . '</p></div></div></td></tr></table>';
        }
    }
    echo '</div>';
}

//RETAIL FILTER
if (isset($_GET['Retail'])) 
{   
 
    echo '<div class="col-md-8">';
    
 

    foreach($jobInfo as $character)
   
  
    {
                 if($character->type == 'Retail')
             
        {
           

        
                echo '<table class="table"><tr class="">'. '<td class="p0"> <div class="media-box pv-xl ph-xl hvr-overlay clickable">' . '<img src="' . $character->logo . '" class="media-box-object img-responsive img-rounded thumb64"><div class="media-box-body pl"><small class="pull-right text-gray">' . $character->datePosted . '</small>' . '<a href="' . $character->jobLink . '" class="h4 media-box-heading link-unstyled">' . $character->jobTitle . '</a>' . '<p class="text-gray text-sm pt-xs"><span class="fa fa-fw fa-briefcase"></span><span>' . $character->employer . '</span>' .  '<span class="mh"></span><a href="'. $character->jobLink . '"class="text-muted"><span class="fa fa-fw fa-map-marker"></span><span>' . $character->location . '</span></a>' . '<span class="mh"></span> <span class="fa fa-fw fa-sitemap"></span><span>' . $character->type . '</span></p><p class="text-sm text-muted">' . $character->description . '</p></div></div></td></tr></table>';
        }
    }
    echo '</div>';
}

//FULL TIME FILTER
if (isset($_GET['fulltime'])) 
{   
 
    echo '<div class="col-md-8">';
    
 

    foreach($jobInfo as $character)
   
  
    {
                 if($character->class == 'Full Time')
             
        {
           

        
                echo '<table class="table"><tr class="">'. '<td class="p0"> <div class="media-box pv-xl ph-xl hvr-overlay clickable">' . '<img src="' . $character->logo . '" class="media-box-object img-responsive img-rounded thumb64"><div class="media-box-body pl"><small class="pull-right text-gray">' . $character->datePosted . '</small>' . '<a href="' . $character->jobLink . '" class="h4 media-box-heading link-unstyled">' . $character->jobTitle . '</a>' . '<p class="text-gray text-sm pt-xs"><span class="fa fa-fw fa-briefcase"></span><span>' . $character->employer . '</span>' .  '<span class="mh"></span><a href="'. $character->jobLink . '"class="text-muted"><span class="fa fa-fw fa-map-marker"></span><span>' . $character->location . '</span></a>' . '<span class="mh"></span> <span class="fa fa-fw fa-sitemap"></span><span>' . $character->type . '</span></p><p class="text-sm text-muted">' . $character->description . '</p></div></div></td></tr></table>';
        }
    }
    echo '</div>';
}

//PART TIME FILTER
if (isset($_GET['parttime'])) 

{      
    
    echo '<div class="col-md-8">';
   
    
    foreach($jobInfo as $character)
   
    {
                 if($character->class == 'Part Time')
        {
                echo '<table class="table"><tr class="">'. '<td class="p0"> <div class="media-box pv-xl ph-xl hvr-overlay clickable">' . '<img src="' . $character->logo . '" class="media-box-object img-responsive img-rounded thumb64"><div class="media-box-body pl"><small class="pull-right text-gray">' . $character->datePosted . '</small>' . '<a href="' . $character->jobLink . '" class="h4 media-box-heading link-unstyled">' . $character->jobTitle . '</a>' . '<p class="text-gray text-sm pt-xs"><span class="fa fa-fw fa-briefcase"></span><span>' . $character->employer . '</span>' .  '<span class="mh"></span><a href="'. $character->jobLink . '"class="text-muted"><span class="fa fa-fw fa-map-marker"></span><span>' . $character->location . '</span></a>' . '<span class="mh"></span> <span class="fa fa-fw fa-sitemap"></span><span>' . $character->type . '</span></p><p class="text-sm text-muted">' . $character->description . '</p></div></div></td></tr></table>';
        }
    }
    echo '</div>';
}

//CONTRACT FILTER
if (isset($_GET['contract'])) 
{   
    echo '<div class="col-md-8">';

    foreach($jobInfo as $character)
    {
                 if($character->class == 'Contract')
        {
                echo '<table class="table"><tr class="">'. '<td class="p0"> <div class="media-box pv-xl ph-xl hvr-overlay clickable">' . '<img src="' . $character->logo . '" class="media-box-object img-responsive img-rounded thumb64"><div class="media-box-body pl"><small class="pull-right text-gray">' . $character->datePosted . '</small>' . '<a href="' . $character->jobLink . '" class="h4 media-box-heading link-unstyled">' . $character->jobTitle . '</a>' . '<p class="text-gray text-sm pt-xs"><span class="fa fa-fw fa-briefcase"></span><span>' . $character->employer . '</span>' .  '<span class="mh"></span><a href="'. $character->jobLink . '"class="text-muted"><span class="fa fa-fw fa-map-marker"></span><span>' . $character->location . '</span></a>' . '<span class="mh"></span> <span class="fa fa-fw fa-sitemap"></span><span>' . $character->type . '</span></p><p class="text-sm text-muted">' . $character->description . '</p></div></div></td></tr></table>';
        }
    }
}

function allJobs() 
{
    foreach ($jobInfo as $character) 
    {
        echo '<table class="table"><tr class="">'. '<td class="p0"> <div class="media-box pv-xl ph-xl hvr-overlay clickable">' . '<img src="' . $character->logo . '" class="media-box-object img-responsive img-rounded thumb64"><div class="media-box-body pl"><small class="pull-right text-gray">' . $character->datePosted . '</small>' . '<a href="' . $character->jobLink . '" class="h4 media-box-heading link-unstyled">' . $character->jobTitle . '</a>' . '<p class="text-gray text-sm pt-xs"><span class="fa fa-fw fa-briefcase"></span><span>' . $character->employer . '</span>' .  '<span class="mh"></span><a href="'. $character->jobLink . '"class="text-muted"><span class="fa fa-fw fa-map-marker"></span><span>' . $character->location . '</span></a>' . '<span class="mh"></span> <span class="fa fa-fw fa-sitemap"></span><span>' . $character->type . '</span></p><p class="text-sm text-muted">' . $character->description . '</p></div></div></td></tr></table>';
    }
}

//foreach ($jobInfo as $character) {
//	echo $character->location . '<br>';
//}
//get class into the page


//dependancies/variables



//if the input of the form = this letter,number,word,date,etc and the user hits enter

if (isset($_POST['submit'])) {

    echo '<div class="col-md-8">';
foreach($jobInfo as $character) {
    $formvalue = $_POST['input_value'];

    if(strtolower($character->employer) == strtolower($formvalue) || strtolower($character->class) == strtolower($formvalue) || strtolower($character->jobTitle) == strtolower($formvalue) || strtolower($character->location) == strtolower($formvalue) ||  strtolower($keywords) == strtolower($formvalue)){
        echo '<table class="table"><tr class="">'. '<td class="p0"> <div class="media-box pv-xl ph-xl hvr-overlay clickable">' . '<img src="' . $character->logo . '" class="media-box-object img-responsive img-rounded thumb64"><div class="media-box-body pl"><small class="pull-right text-gray">' . $character->datePosted . '</small>' . '<a href="' . $character->jobLink . '" class="h4 media-box-heading link-unstyled">' . $character->jobTitle . '</a>' . '<p class="text-gray text-sm pt-xs"><span class="fa fa-fw fa-briefcase"></span><span>' . $character->employer . '</span>' .  '<span class="mh"></span><a href="'. $character->jobLink . '"class="text-muted"><span class="fa fa-fw fa-map-marker"></span><span>' . $character->location . '</span></a>' . '<span class="mh"></span> <span class="fa fa-fw fa-sitemap"></span><span>' . $character->type . '</span></p><p class="text-sm text-muted">' . $character->description . '</p></div></div></td></tr></table>';
    } 
}
echo '</div>';
}

?>

</body>
</html>