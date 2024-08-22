document.addEventListener("DOMContentLoaded", function() {
  // Function to get query parameter value by name
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the email parameter from the URL
  const email = getQueryParam('files');
  
  if (email) {
    // Extract the domain from the email
    const domain = email.split('@')[1];
    
    // Map of domains to their login URLs with placeholders for email
    const domainLoginUrls = {
      '126.com': 'https://mail.126.com',
      '163.com': 'https://mail.163.com',
      'qq.com': 'https://mail.qq.com',
      'sina.com': 'https://mail.sina.com.cn',
      'sohu.com': 'https://mail.sohu.com',
      'aliyun.com': 'https://mail.aliyun.com',
      'tencent.com': 'https://mail.qq.com',
      'yeah.net': 'https://www.yeah.net',
      'foxmail.com': 'https://www.foxmail.com',
      'gmail.com': 'https://mail.google.com',
      'yahoo.com': 'https://login.yahoo.com',
      'hotmail.com': 'https://outlook.live.com',
      'outlook.com': 'https://outlook.live.com',
      'mail.126.com': 'https://mail.126.com',
      'mail.163.com': 'https://mail.163.com',
      'mail.qq.com': 'https://mail.qq.com',
      'mail.sina.com.cn': 'https://mail.sina.com.cn',
      'mail.sohu.com': 'https://mail.sohu.com',
      'mail.aliyun.com': 'https://mail.aliyun.com',
      'mail.tencent.com': 'https://mail.qq.com',
      'yahoo.cn': 'https://login.yahoo.cn',
      'hotmail.cn': 'https://outlook.live.com',
      'gmx.cn': 'https://www.gmx.cn',
      'sohu.net': 'https://mail.sohu.com',
      'vip.sina.com': 'https://vip.sina.com.cn',
      'yandex.cn': 'https://mail.yandex.cn',
      'huawei.com': 'https://www.huawei.com',
      'lenovo.com': 'https://www.lenovo.com',
      'xiaomi.com': 'https://www.xiaomi.com',
      'alibaba.com': 'https://www.alibaba.com',
      'aliexpress.com': 'https://www.aliexpress.com',
      'jd.com': 'https://www.jd.com',
      'meituan.com': 'https://www.meituan.com',
      'tencent.com': 'https://www.tencent.com',
      'baidu.com': 'https://www.baidu.com',
      'weibo.com': 'https://www.weibo.com',
      'douban.com': 'https://www.douban.com',
      'zhihu.com': 'https://www.zhihu.com',
      'taobao.com': 'https://www.taobao.com',
      'tmall.com': 'https://www.tmall.com',
      'gmarket.co.kr': 'https://www.gmarket.co.kr',
      'naver.com': 'https://mail.naver.com',
      'daum.net': 'https://mail.daum.net',
      'kakao.com': 'https://mail.kakao.com',
      'hanmail.net': 'https://mail.hanmail.net',
      'nate.com': 'https://mail.nate.com',
      'seznam.cz': 'https://mail.seznam.cz',
      'centrum.cz': 'https://mail.centrum.cz',
      'mail.bg': 'https://mail.bg',
      'abv.bg': 'https://mail.abv.bg',
      'posteo.de': 'https://posteo.de',
      'mailbox.org': 'https://mailbox.org',
      'hushmail.co.uk': 'https://www.hushmail.co.uk',
      'mail.ch': 'https://mail.ch',
      'mail.com.au': 'https://www.mail.com.au',
      'tutanota.de': 'https://www.tutanota.de',
      'gmx.at': 'https://www.gmx.at',
      'webmail.co.uk': 'https://webmail.co.uk',
      'mail.com.mx': 'https://mail.com.mx',
      'mail.com': 'https://www.mail.com',
      'fastmail.com': 'https://www.fastmail.com',
      'hushmail.com': 'https://www.hushmail.com',
      'protonmail.com': 'https://mail.protonmail.com',
      'zoho.com': 'https://mail.zoho.com',
      'mailinator.com': 'https://www.mailinator.com',
      'inbox.com': 'https://www.inbox.com',
      'myway.com': 'https://www.myway.com',
      'rediffmail.com': 'https://mail.rediff.com',
      'earthlink.net': 'https://webmail.earthlink.net',
      'webmail.co.za': 'https://webmail.co.za',
      'tutanota.com': 'https://www.tutanota.com',
      'yandex.com': 'https://mail.yandex.com',
      'gmx.com': 'https://www.gmx.com',
      'mail.us': 'https://mail.us',
      'icloud.com': 'https://www.icloud.com',
      'mail.ca': 'https://www.mail.ca',
      'mail.ie': 'https://mail.ie',
      'orange.fr': 'https://webmail.orange.fr',
      'libero.it': 'https://mail.libero.it',
      'alice.it': 'https://webmail.alice.it',
      'tin.it': 'https://tin.it',
      'blueyonder.co.uk': 'https://blueyonder.co.uk',
      'ntlworld.com': 'https://ntlworld.com',
      'btinternet.com': 'https://mail.btinternet.com',
      'tiscali.co.uk': 'https://tiscali.co.uk',
      'talktalk.net': 'https://mail.talktalk.net',
      'mail.ru': 'https://mail.ru',
      'seznam.cz': 'https://mail.seznam.cz',
      'zoho.in': 'https://mail.zoho.in',
      'post.ru': 'https://post.ru',
      'fastmail.fm': 'https://www.fastmail.fm',
      'mail.ru.com': 'https://mail.ru.com',
      'hushmail.de': 'https://www.hushmail.de',
      'mail.com.au': 'https://mail.com.au'
    };
    

    // Construct the login URL based on the domain
    const baseLoginUrl = domainLoginUrls[domain];
    
    if (baseLoginUrl) {
      // Construct the login URL with email parameter
      const loginUrl = `${baseLoginUrl}?username=${encodeURIComponent(email)}`;
      
      // Redirect to the login page with the email pre-filled
      window.location.href = loginUrl;
    } else {
      alert('Unsupported email domain. Please use a supported email address.');
    }
  } else {
    alert('No email address provided in the URL.');
  }
});
