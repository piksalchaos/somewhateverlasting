//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        Powered by <a href="https://rarebit.neocities.org">Rarebit</a>
        |
        <a href="https://int10h.org/blog/2015/12/bigblue-terminal-oldschool-fixed-width-font/">BigBlue Terminal</a>
        font by <a href="https://int10h.org/blog/"> VileR</a> under the
         <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> license
        <br>
        See my other stuff <a href=https://piksalchaos.github.io/>here!</a>
    </footer>
`;
