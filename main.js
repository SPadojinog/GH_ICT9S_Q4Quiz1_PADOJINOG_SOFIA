        function CalculateBMI() {
            var kg = document.getElementById("inputKilogram").value;
            var meter = document.getElementById("inputMeter").value; 
            var bmi = kg / Math.pow(meter,2)
            var Message = "";

            if (kg === "" || meter === "") {
                window.alert("Fill in the form first")
            }
            else {
                if (bmi >= 1 && bmi <= 18.5) {
                    Message = "You are underweight!";
                } 

                else if (bmi >= 18.6 && bmi <= 24.9) {
                    Message = "You have normal weight, keep it up!";
                } 

                else if (bmi >= 25 && bmi <= 29.9) {
                    Message = "You are overweight!";
                } 

                else if (bmi >= 30) {
                    Message = "You are obese!";
                } 

                else {
                    window.alert("Invalid range!");
                }
            }
            document.getElementById("BMIResult").innerHTML = "Your BMI: " +  bmi.toFixed(2) + "|" + Message;
        }