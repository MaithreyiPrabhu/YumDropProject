package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.UsersOtp;
import com.app.yumdrop.Repository.UsersOtpRepository;
import com.app.yumdrop.Service.SmsTwoFactorService;
import com.app.yumdrop.Utils.PasswordUtils;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SmsTwoFactorServiceImpl implements SmsTwoFactorService {

    private final static String ACCOUNT_SID = "ACb1dccceafdf2b145395f15aff91fda12";
    private final static String AUTH_TOKEN = "9337c4a5d281f63782b649d78d5eb7a7";

    static {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    }

    @Autowired
    UsersOtpRepository usersOtpRepository;

    @Override
    public boolean send2FaCodeAsSms(String email, String mobilePhoneNumber, String twoFactorCode) {

        try {
            Message.creator(new PhoneNumber(mobilePhoneNumber), new PhoneNumber("+16197802581"),
                    "Hello from Yumdrop! Your Two Factor Authentication Code is: " + twoFactorCode).create();
        } catch(Exception e){
            return false;
        }
        usersOtpRepository.save(new UsersOtp(email, PasswordUtils.convertPasswordToHash(twoFactorCode)));
        return true;
    }
}
