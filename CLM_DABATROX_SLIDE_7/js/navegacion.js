function goTo(slide) {
    console.log('redirige a slide ' + slide)
    try {
        com.veeva.clm.gotoSlide(slide + ".zip", "");
    } catch (error) {
        window.location.href = '../' + slide + '/' + slide + '.html';
    }
}