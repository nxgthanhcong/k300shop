using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using Ultilities.Interfaces;

namespace Ultilities.Implementions
{
    public class SendMailHelper : ISendMailHelper
    {
        public async Task SendMail()
        {
            try
            {
                MailMessage mailMessage = new MailMessage(
                from: "0306181003@caothang.edu.vn",
                to: "0306181049@caothang.edu.vn",
                subject: "Congz Pro Vjp",
                body: "body lozzaa"
                );
                mailMessage.BodyEncoding = System.Text.Encoding.UTF8;
                mailMessage.SubjectEncoding = System.Text.Encoding.UTF8;
                mailMessage.IsBodyHtml = true;
                mailMessage.ReplyToList.Add(new MailAddress("0306181003@caothang.edu.vn"));
                mailMessage.Sender = new MailAddress("0306181003@caothang.edu.vn");
                mailMessage.Attachments.Add(new Attachment(@"C:\Users\nxgth\OneDrive\Desktop\k300shop\document_doan.txt"));

                using (SmtpClient client = new SmtpClient("smtp.gmail.com"))
                {
                    client.Port = 587;
                    client.UseDefaultCredentials = true;
                    client.Credentials = new NetworkCredential("0306181003@caothang.edu.vn", "1highbarporn03");
                    client.EnableSsl = true;
                    await client.SendMailAsync(mailMessage);
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
