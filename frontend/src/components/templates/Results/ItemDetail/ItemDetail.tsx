import React from 'react';
import { BigPictureItem } from '../../../atoms/BigPictureItem/BigPictureItem';
import { DetailItem } from '../../../atoms/DetailItem/DetailItem';
import './ItemDetail.css';

export function ItemDetail() {
  const description = `
    The Scarpe di Bianco Italian footwear collection was founded by Bill White in 2009. Di Bianco
    offers classic handmade men's shoes withamodern twist.The combination of timeless
    models and details with contemporary colors and styling,results in decidedly current,yet,
    elegant models.The aim of the Scarpe di Bianco company is to offer menacustom shoe
    buying experience throughamultitude of models.lasts.soles.leathers,and color options.
  `;

  return (
    <div className="main-content">
      <section className="content-container">
        <div className="detail-item-container">
          <BigPictureItem />
          <DetailItem />
        </div>

        <div className="full-description-container">
          <div className="title-container">
            <h2>Descripción del producto</h2>
          </div>

          <div className="full-description-item">
            <p>{description}</p>
          </div>
        </div>
      </section>

    </div>
  );
}
