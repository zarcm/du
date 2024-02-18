class ApplicationMailer < ActionMailer::Base
  default from: "notifications@captureview.in"
  layout 'mailer'
  helper :application
end
