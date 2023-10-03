import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '../../../../firebaseAdmin'
import admin from 'firebase-admin'
export async function POST(req: NextRequest) {
  try {
    console.log('Scraper submitting')
    const { search } = await req.json()
    console.log('Search is: ', search)

    const res = await fetch(
      'https://api.brightdata.com/dca/trigger?collector=c_ln4bbbbi2n8ebdxypi&queue_next=1',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          search,
          pages: 2,
        }),
      },
    )

    if (res.ok) {
      const data = await res.json()
      console.log('scraper data is: ', data)

      const { collection_id, start_eta } = data
      if (!collection_id) {
        throw new Error('collection_id is empty')
      }

      await adminDb.collection('searches').doc(collection_id).set({
        search,
        start_eta,
        status: 'pending',
        updatedAt: admin.firestore.Timestamp.now(),
      })

      return NextResponse.json(
        {
          collection_id,
          start_eta,
        },
        { status: 200 },
      )
    } else {
      const errorData = await res.json()
      throw new Error(`Scraper API Error: ${errorData.error}`)
    }
  } catch (err: any) {
    console.log('Error: ', err)
    return NextResponse.json(
      {
        error: err.message,
      },
      { status: 500 },
    )
  }
}
