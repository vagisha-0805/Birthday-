function beginJourney(){

    document
        .getElementById("page1")
        .scrollIntoView({
            behavior:"smooth"
        });

}

function goToPage(pageNumber){

    const page = document.getElementById(`page${pageNumber}`);

    page.scrollIntoView({
        behavior:"smooth",
        block:"start"
    });

}