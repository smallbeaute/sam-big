getcontent();

//获取用户的基本信息

function getcontent() {  
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        // headers 就是请求头配置对象
        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        success: function (res) {  
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败')
            }
        }

    })
}