import type { NextPage } from 'next';
import { Container } from 'react-bootstrap';
import React from 'react';

// const Footer: NextPage = () => {
//     return (
//         <div>这是页脚</div>
//     )
// }
//
// export default Footer;

const Index = () => {
    const siteName = "ned-test";
    const cc = `${siteName}`;
    return (
      <footer className="bg-light py-3">
          <Container>
              <p className="text-center mb-0 fs-14 text-secondary">
                      Built on NEDONION
              </p>
          </Container>
      </footer>
    );
};

export default React.memo(Index);
