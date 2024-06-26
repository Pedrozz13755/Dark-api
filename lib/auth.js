module.exports = {
    isAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash('error_msg', 'Por favor faça o login para continuar');
      res.redirect('/login');
    },
    notAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect('/docs');      
    },
    captchaRegister: function(req, res, next) {
      if (req.recaptcha.error) {
          req.flash('error_msg','A reCAPTCHA está incorreta');
          res.redirect('/register');
      } else {
          return next();
     }
    },
    captchaLogin: function(req, res, next) {
      if (req.recaptcha.error) {
          req.flash('error_msg','A reCAPTCHA está incorreta');
          res.redirect('/login');
      } else {
          return next();
      }
    }
  };