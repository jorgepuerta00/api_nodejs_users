'use strict';

const GenerateUUID = require('./GenerateUUID');

class CreateUser {
    constructor(userRepository, emailProvider) {
        this.userRepository = userRepository;
        this.generateUUID = new GenerateUUID();
        this.emailProvider = emailProvider;
    }

    setUserId() {
        this.generateUUID.setBytes(16);
        this.user.id = this.user.id == null ? this.generateUUID.execute() : this.user.id;
    }
    
    setUserCode() {
        this.generateUUID.setBytes(8);
        this.user.code = this.user.code == null ? this.generateUUID.execute() : this.user.code;
    }

    saveUser() {
        return this.userRepository.save(this.user);
    }

    setUser(user) {
        this.user = user;
    }

    execute() {
        this.setUserId();
        this.setUserCode();
        var saveUser = this.saveUser();
        this.sendEmailWelcomeUser();

        return saveUser;
    }

    sendEmailWelcomeUser() {
        this.emailProvider.setEmailData(this.setEmailData());
        this.emailProvider.execute();
    }

    setEmailData() {
        var emailData = {
            info: {
                to: this.user.email,
                htmlBody: this.createEmailBody(),
                subject: "Bienvenido a Pidenos! ✔🛒🛒🛒",
                text: "Este es mensaje de bienvenida a nuestra plataforma"
            }
        };

        return emailData;
    }

    createEmailBody() {
        var htmlBody = `<p><img src='https://firebasestorage.googleapis.com/v0/b/pidenos-project.appspot.com/o/banners%2Fbanner.png?alt=media&amp;token=1fe6f6d8-ae7d-4e33-903d-0cc7b367b229' alt='' width='1038' height='394' name='0 Imagen' align='left' border='0' /></p><p>&nbsp;&nbsp;</p><center></center><center><table style='height: 1073px;' width='990' cellspacing='0' cellpadding='50'><tbody><tr style='height: 556.387px;'><td style='width: 929.2px; height: 556.387px;' valign='top'><table width='650' cellspacing='0' cellpadding='0'><tbody><tr style='height: 768.8px;'><td style='height: 768.8px;' width='650'><table style='height: 628px;' width='925' cellspacing='0' cellpadding='23'><tbody><tr style='height: 557px;'><td style='width: 875.2px; height: 557px;' valign='top'><p><span style='font-family: Helvetica, serif;'><span style='font-size: xx-large;'><strong>&iexcl;Hola @name!&nbsp;</strong></span></span><img src='https://firebasestorage.googleapis.com/v0/b/pidenos-project.appspot.com/o/banners%2Femogi.png?alt=media&amp;token=4a7cc56a-5e26-4550-a150-b55b8ed355de' alt='' width='60' height='60' name='Imagen 2' align='bottom' border='0' /></p><p>&nbsp;</p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'>&iexcl;Bienvenido!</span></span></p><p>&nbsp;</p><p><span style='font-family: Helvetica, serif;'><span style='font-size: xx-large;'><strong>&iexcl;Te falta poco!</strong></span></span></p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'>Cuando termines los siguientes pasos, validaremos tus datos y empezaras a vender por P&iacute;denos.</span></span></p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'>Pasos para seguir completar el registro de tu negocio</span></span></p><p>&nbsp;</p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'>Pasos :</span></span></p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: medium;'>1. Adjuntar c&aacute;mara de comercio</span></span></span></p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: medium;'>2. Adjuntar Rut</span></span></span></p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: medium;'>3. Cedula representante legal</span></span></span></p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: medium;'>4. Adjuntar plantilla en Excel con los productos y precios</span></span></span></p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: medium;'>5. Adjuntar fotos de los productos </span></span></span><span style='color: #ff0000;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: small;'>(Foto&nbsp;Imagen </span></span></span><span style='color: #ff0000;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: small;'><strong>512x349&nbsp; en formato PNG o JPG)</strong></span></span></span></p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: medium;'>6. Ajuntar Logo</span></span></span><span style='color: #ff0000;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: medium;'>( </span></span></span><span style='color: #ff0000;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: small;'>Logo&nbsp;Imagen </span></span></span><span style='color: #ff0000;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: small;'><strong>400x400 en formato PNG o JPG</strong></span></span></span><span style='color: #ff0000;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: medium;'><strong>)</strong></span></span></span></p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: medium;'>7. Descripci&oacute;n corta del negocio</span></span></span></p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: medium;'>8. Descripci&oacute;n corta de los productos</span></span></span></p><p><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: small;'>Nota: las fotos de los productos deben tener el mismo nombre del producto que se relacion&oacute; en el Excel </span></span></span></p><p>&nbsp;</p><p align='center'><span style='color: #6b6b6b;'><span style='font-family: 'Open Sans', serif;'><span style='font-size: medium;'>&iexcl;P&iacute;denos lo que sea!</span></span></span></p></td></tr></tbody></table><p>&nbsp;</p><p align='center'><span style='color: #222222;'><span style='font-size: x-large;'>Equipo p&iacute;denos</span></span></p><h6 class='western' align='center'><span style='color: #000000;'><span style='font-family: Helvetica, serif;'><span style='font-size: small;'><strong><br />Si tienes alguna duda o queja, cont&aacute;ctanos a trav&eacute;s de nuestra l&iacute;nea de atenci&oacute;n&nbsp;</strong></span></span></span><span style='color: #0000ff;'><u><a href='mailto:servicio.cliente@pidenos.com.co'><span style='font-family: Helvetica, serif;'><span style='font-size: small;'><strong>servicio.cliente@pidenos.com.co</strong></span></span></a></u></span></h6><p align='center'><span style='color: #0000ff;'><u><span style='font-family: Helvetica, serif;'><span style='font-size: small;'><em><strong>www.pidenos.com.co</strong></em></span></span></u></span></p></td></tr></tbody></table></td></tr></tbody></table></center><p align='center'>&nbsp;</p><p>&nbsp;</p>`
        htmlBody = htmlBody.replace('@name', this.user.firstName);
        return htmlBody;
    }
}

module.exports = CreateUser;
