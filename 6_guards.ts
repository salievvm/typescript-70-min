function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim();
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = ' error header'
    message = 'error message'
}

function handle(response: MyResponse | MyError) {
    if (response instanceof MyResponse) {
        return {
            info: response.header + response.result
        }
    }
    return {
        info: response.header + response.message
    }
}

// 

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(alertType: AlertType) {

}

setAlertType('success')
setAlertType('warning')
// setAlertType('hz')