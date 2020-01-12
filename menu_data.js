


_menuCloseDelay=500           // The time delay for menus to remain visible on mouse out
_menuOpenDelay=150            // The time delay before menus open on mouse over
_followSpeed=5                // Follow scrolling speed 5
_followRate=50                // Follow scrolling Rate 50
_subOffsetTop=5               // Sub menu top offset
_subOffsetLeft=-10            // Sub menu left offset
_scrollAmount=3               // Only needed for Netscape 4.x
_scrollDelay=20               // Only needed for Netcsape 4.x



with(menuStyle=new mm_style()){
onbgcolor="#4F8EB6";
oncolor="#ffffff";
offbgcolor="#FFFFCC";
offcolor="#515151";
bordercolor="#296488";
borderstyle="solid";
borderwidth=1;
separatorcolor="#2D729D";
separatorsize="1";
padding=5;
fontsize="75%";
fontstyle="normal";
fontfamily="Verdana, Tahoma, Arial";
pagecolor="black";
pagebgcolor="#82B6D7";
headercolor="#000000";
headerbgcolor="#ffffff";
subimage="arrow.gif";
subimagepadding="2";
overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color='#777777', Direction=135, Strength=5)";
outfilter="randomdissolve(duration=0.3)";
}


with(milonic=new menuname("Main Menu")){
style=menuStyle;
top=10;
left=10;
alwaysvisible=1;
followscroll="1";
orientation="horizontal";
aI("text=Home;url=index.htm");
aI("text=Family Tree;url=FamilyTree.htm");
aI("text=Children;showmenu=Children;");
aI("text=Write Ups;showmenu=Writeups;");
aI("text=Reunions;showmenu=Reunions;");
aI("text=Books;showmenu=Books;");
aI("text=Pictures;showmenu=Pictures;");
aI("text=Maps;url=maps.htm;");
aI("text=Search Website;url=search.html;");
aI("text=Contact us;showmenu=Contact;");
}

with(milonic=new menuname("Children")){
style=menuStyle;
overflow="scroll";
aI("text=Earl Thomas Skoe;url=EarlSkoe.htm;");
aI("text=Charles Staton Skoe;url=StantonSkoe.htm;");
aI("text=Bena Skoe Petzel;url=BenaSkoe.htm;");
aI("text=Stanley Skoe;url=StanleySkoe.htm;");
aI("text=Marie Skoe Rozycki;url=MarieSkoe.htm;");
aI("text=Emilie Skoe Karkela;url=EmilieSkoe.htm;");
aI("text=Raymond Skoe;url=RaymondSkoe.htm;");
aI("text=Gladys Skoe Barron;url=GladysSkoe.htm;");
aI("text=Russel Skoe;url=RusselSkoe.htm;");
aI("text=Willis Gorden Skoe;url=WillisSkoe.htm;");
}


with(milonic=new menuname("Pictures")){
style=menuStyle;
aI("text=Graduation Pictures as exe file;url=Pictures/graduation.exe;");
aI("text=Wedding Pictures as exe file;url=Pictures/wedding.exe;");
aI("text=My Life Pictures as exe file (12,346,625 bytes);url=Pictures/My Life.exe;");
}


with(milonic=new menuname("Writeups")){
style=menuStyle;
aI("text=Stanley Skoe Reflections;url=writeups/Stanley Skoe Reflections.pdf;");
aI("text=Stanley Skoe Berry Picking;url=writeups/Stanley Skoe Berry Picking.pdf;");
aI("text=Stanley Skoe Sinksholes and Bad Roads;url=writeups/Sinkholes and Bad Roads by Stanley Skoe.pdf;");
aI("text=Earl Thomas Skoe - Centennial History 1903-2003;url=writeups/Earl Thomas Skoe.pdf;");
aI("text=Vera Janet Skoe written by Ralph and Kathy Skoe;url=writeups/vera janet skoe.pdf;");
aI("text=Earl and Vera's 50th Anniversary and other information;url=writeups/earl and vera skoe 50 anniversary.pdf;");
aI("text=Tribute to my Aunt Emilie;url=writeups/Tribute to Emilie Nov 2006.pdf;");
aI("text=Bergville School As I Remember It - The download may take a couple of minutes;url=writeups/Bergville School as I remember it.pdf;");
aI("text=Skoe Update 1980 - The download may take a couple of minutes;url=writeups/Skoe Update 1980.pdf;");
aI("text=Tribute to Bena Skoe Petzel on 81st Birthday - The download may take a couple of minutes;url=writeups/Tribute to Bena Skoe Petzel on 81st Birthday.docx;");
}
with(milonic=new menuname("Books")){
style=menuStyle;
aI("text=Skoe Saga - Bena Skoe;url=books/Skoe Saga.pdf;");
aI("text=My Life - R.C. Skoe;url=books/My Life.pdf;");
}
with(milonic=new menuname("Reunions")){
style=menuStyle;
aI("text=Reunion 1960;url=reunion1960.htm;");
}



with(milonic=new menuname("Contact")){
style=menuStyle;
aI("text=Via e-mail;url=mailto:RalphESkoe@yahoo.com");
aI("text=Via telephone;url=ContactUs.htm");
aI("text=Guestbook;url=http://users3.smartgb.com/g/g.php?a=s&i=g32-03434-11");
}




drawMenus();

