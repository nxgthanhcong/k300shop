
function Validator(formSelector) {  
    var _this = this;
    //tìm con
    function getParentElement(element, selector) {
        while(element.parentElement) { //nếu nó là element cuối cùng thì break
            if(element.parentElement.matches(selector)) { //tìm element match vs selector
                return element.parentElement
            }
            element = element.parentElement //gán elemet thành element cha để tìm từ trong ra
        }
    }  
    //tạo object Validator rules chứ các hàm thực hiện test
    var validatorRules = {
        required: function(value) {
            return value ? undefined : 'Trường này không được bỏ trống'
        },
        email: function(value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            return regex.test(value) ? undefined : 'Trường này phải là Email'
        },
        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`
            }
        },
        max: function(max) {
            return function(value) {
                return value.length <= max ? undefined : `Vui lòng không nhập quá ${max} kí tự`
            }
        }
    }
    //tạo mảng rỗng FORM RULES
    var formRules = {}
    //lấy ra ELEMENT FORM
    var formElement = document.querySelector(formSelector)
    if(formElement) {
        //lấy ra các thẻ input có rules
        var inputElements = formElement.querySelectorAll('[name][rules]')
        for (var input of inputElements) {
            var rules = input.getAttribute('rules').split('|')
            for(var rule of rules) {
                var ruleInfor;
                var isRuleHasValue = rule.includes(':')
                if(isRuleHasValue) {
                    ruleInfor = rule.split(':')
                    rule = ruleInfor[0]
                }

                var ruleFunc = validatorRules[rule]
                if(isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfor[1])
                }

                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                } else {
                    formRules[input.name] = [ruleFunc]
                }
            }
            //lắng nghe sự kiện
            input.onblur = handleValidate;
            input.oninput = handleClear;
            //hàm thực hiện validate
            function handleValidate(e) {
                var rules = formRules[e.target.name]
                var errorMessage;

                for(var rule of rules) {
                    errorMessage = rule(e.target.value);
                    if(errorMessage) break
                }
                if(errorMessage) {
                    var formGroup = getParentElement(e.target, '.form-group')
                    if(formGroup) {
                        var formMessage = formGroup.querySelector('.form-message')
                        if(formMessage) {
                            formMessage.innerText = errorMessage
                            formGroup.classList.add('invalid')
                        }
                    }
                }
                return !errorMessage
            }

            function handleClear(e) {
                var formGroup = getParentElement(e.target, '.form-group')
                if(formGroup.classList.contains('invalid')) {
                    formGroup.classList.remove('invalid')
                    var formMessage = formGroup.querySelector('.form-message')
                    if(formMessage) {
                        formMessage.innerText = ''
                    }
                }
            }
        }
    }

    formElement.onsubmit = function(e) {
        e.preventDefault()

        var inputElements = formElement.querySelectorAll('[name][rules]')
        var isValid = true
        for (var input of inputElements) {
            if(!handleValidate({ target: input })) {
                isValid = false
            }
        }

        if(isValid) {
            if(typeof _this.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]:not([disable])')
                var formValues = Array.from(enableInputs).reduce(function(values, input) {
                    switch(input.type) {
                        case 'radio': //radio chỉ chọn value dc checked
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                            break
                        case 'checkbox': //checkbox chỉ chọn value dc check nhưng là dạng mảng nên push pt vào
                            if(!Array.isArray(values[input.name])) {
                                values[input.name] = []
                            }
                            if(input.matches(':checked')) {
                                values[input.name].push(input.value)
                            }
                            break
                        case 'file':
                            values[input.name] = input.files
                            break
                        default:
                            values[input.name] = input.value
                    }
                    return values
                }, {})
                _this.onSubmit(formValues)
            } else {
                formElement.submit()
            }
        }
    }
}