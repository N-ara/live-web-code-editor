
    // Function to show preview in iframe
    function showPreview() {
        var htmlCode = document.getElementById("htmlCode").value;
        var cssCode = "<style>" + document.getElementById("cssCode").value + "</style>";
        var jsCode = "<script>" + document.getElementById("jsCode").value + "<\/script>";
        var frame = document.getElementById("preview-window").contentWindow.document;
        frame.open();
        frame.write(htmlCode + cssCode + jsCode);
        frame.close();
    }

    // Function to toggle visibility of sections
    function show(x) {
        document.getElementById("html").style.display = "none";
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById(x).style.display = "block";
    }

    // Function to show all sections on larger screens
    function show_all() {
        if (window.innerWidth >= 992) {
            document.getElementById("html").style.display = "block";
            document.getElementById("css").style.display = "block";
            document.getElementById("js").style.display = "block";
            document.getElementById("result").style.display = "block";
        }
        if (window.innerWidth < 992 && document.getElementById("html").style.display == "block") {
            document.getElementById("css").style.display = "none";
            document.getElementById("js").style.display = "none";
            document.getElementById("result").style.display = "none";
        }
    }

    // Auto-save code to localStorage
    function saveCode() {
        localStorage.setItem("htmlCode", document.getElementById("htmlCode").value);
        localStorage.setItem("cssCode", document.getElementById("cssCode").value);
        localStorage.setItem("jsCode", document.getElementById("jsCode").value);
    }

    // Auto-load code from localStorage
    function loadCode() {
        if (localStorage.getItem("htmlCode")) {
            document.getElementById("htmlCode").value = localStorage.getItem("htmlCode");
        }
        if (localStorage.getItem("cssCode")) {
            document.getElementById("cssCode").value = localStorage.getItem("cssCode");
        }
        if (localStorage.getItem("jsCode")) {
            document.getElementById("jsCode").value = localStorage.getItem("jsCode");
        }
        showPreview();
    }

    // Load code when the page loads
    window.onload = loadCode;