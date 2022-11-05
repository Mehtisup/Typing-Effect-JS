<script>
var i = 0;
var text = "Hello World, I'm Mahdi.";
var speed = 60;

function runFunction() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += 
        text.charAt(i);
        i++;
        setTimeout(runFunction, speed);

    }
}
</script>
