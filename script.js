window.onscroll = function() {
    this.console.log(window.pageYOffset)
    var scrolled = window.pageYOffset || document.documentElement.scrollTop,
        skillsBox = document.getElementById('myFace'),
        linFill = document.getElementById('lin_fill'),
        linUnfill = document.getElementById('lin_unfill');

    this.console.log(skillsBox.offsetTop)

    if (window.pageYOffset >= skillsBox.offsetTop) {
        this.console.log("reached");
        linFill.className = 'linux_fill_change';
        linUnfill.className = 'linux_unfill_change';

    }
    if (scrolled => imgLeft.height) {}
}