// Components
import Container from '@/global//layouts/Container';
import Input from '@/global//elements/Input';
import Button from '@/global//elements/Button';
export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="top">
          <section>
            <img src="/images/icon-footer-logo.png" alt="" />
            <div>
              <p>
                <strong>Phone:</strong> (682) 283-7869
              </p>
              <p>
                <strong>Email:</strong> info@imperialcomfortsuites.com
              </p>
            </div>
          </section>
          <section>
            <h4>Quick Links</h4>
            <ul>
              <li>About</li>
              <li>Listing</li>
              <li>Contact Us</li>
            </ul>
          </section>
          <section>
            <h4>Newsletter</h4>
            <p>Subscribe to our weekly Newsletter and receive updates via email</p>
            <form action="">
              <Input placeholder={'Enter Email'} />
              <Button>Submit</Button>
            </form>
          </section>
        </div>
        <div className="bottom">
          <p>All Rights Reserved @ Imperial Comfort Suite 2022</p>
        </div>
      </Container>
    </footer>
  );
}
