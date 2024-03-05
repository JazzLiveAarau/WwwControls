// File: Main.js
// Date: 2024-03-01
// Author: Gunnar Lidén

// Inhalt
// =======
// Test class GridList




function initGridList()
{
    var container_el = document.getElementById("id_div_container_grid_list");

    container_el.innerHTML = lotsOfText();

} // initGridList

function lotsOfText()
{
    var ret_text =
    'Gründung im Herbst 1996 In einem Brief vom September 1999 an die Jazz-Freunde von Aarau heisst es: „Wir fanden uns am ‚Argrandissimo‘ und beschlossen, wieder aktiv zu werden. Wir, das sind Véronique und Georges Weiersmüller, Anni und Peter Häuptli, Peter Günthart und Werner Stähli.“ Das Projekt, das im November 1996 gestartet worden war und 1998 den Schwung etwas verloren hatte, bekam neuen Drive und wurde zur festen Grösse im Aarauer Kulturleben: JAZZ live AARAU.Die Konzerte fanden im Restaurant Affenkasten statt, mit Ausnahmen. Der Amerikaner Kenny Drew jr. (p) zum Beispiel spielte 1999 im Golattikeller, ebenso im Jahr 2003 der legendäre Bebop-Pianist Barry Harrris. Im Herbst 2006 führte JAZZ live AARAU im Rahmen des Aarauer Kulturfestes zum letzten Mal Jazzkonzerte im „Aff“ durch. Die über 170-jährige Geschichte des Traditionslokals hatte ein Ende. Buch statt Jazz, im Affenkasten richtete sich die Buchhandlung „Wirz Thalia“ ein.Vom Affenkasten in die Spaghetti FactoryJAZZ live AARAU fand im IBA-Gebäude beim Turbinen-Kreisel ein neue Konzertbühne. Mittlerweile blickte das kleine Team der engagierten Jazz-Enthusiasten auf eine zehnjährige Geschichte mit 120 Konzerten und 6000 Zuhörerinnen und Zuhörern zurück. Zum Team war Gunnar Lidén gestossen. Er kümmerte sich fortan um IT-Belange, Website und Flyer. Marianne Sneep (2007 bis 2010) war für den Druck zuständig. Ausgeschieden war in der Zwischenzeit Werner Stähli.Das Jubiläum wurde im März 2007 mit den Saxofonisten Rafael Baier und Luigi Grasso und ihren Bands gefeiert. Nicht im IBA-Gebäude, sondern im Salmensaal der Spaghetti Factory mitten in der Altstadt, wo Geschäftsführer Marcel Meyer fortan grosszügiges Gastrecht gewährte.';

    return ret_text;
}