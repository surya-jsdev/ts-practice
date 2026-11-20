// let status :string|number|boolean;

// status ="Surya"
// status=true;


// console.log(status);
 


// let currentStatus:status;
// currentStatus="Loading";
// currentStatus="success";
// currentStatus="error";

// console.log(currentStatus);
type Status= "idle"|"loading"|"success"|"error"
function getMessage(status: Status): string {
    switch (status) {
        case "idle":
            return "Please start";

        case "loading":
            return "Loading...";

        case "success":
            return "Success";

        case "error":
            return "Something went wrong";

        default:
            return "Unknown status";
    }
}


console.log(getMessage("loading"));
