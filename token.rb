#
# Source Provided by REPL Team : https://gist.github.com/amasad/2304c0f6cf694373fecc
#

require 'openssl'
require 'date'
require 'base64'

def gen_token()
    digest = OpenSSL::Digest.new('sha256')
    secret = 'put your secret here'
    time_created = Time.now.to_i * 1000 # convert to ms
    puts time_created
    hmac = OpenSSL::HMAC.digest(digest, secret, time_created.to_s)
    token = {
        msg_mac: Base64.encode64(hmac).strip,
        time_created: time_created
    }
    puts token
end

gen_token()