<?php

namespace App\Http\Controllers;


use Storage;
use App\Models\Listing;
use Illuminate\Http\Request;

class ListingController extends Controller
{
      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        if (!$request->has('min_price') || !$request->has('max_price') || !$request->has('city') || !$request->has('bedrooms')) {
            
            $listing = Listing::orderBy('created_at', 'asc')->get();
            $response = [
                'success' => true,
                'listings' => $listing,
            ];
            
            return response ($response, 200);
        } else {

            // Get the minimum and maximum price from the query string
            $minPrice = $request->query('min_price');
            $maxPrice = $request->query('max_price');
            $bedrooms = $request->query('bedrooms');
            $city = $request->query('city');


            // Fetch the posts that belong to the category  
            $listing = Listing::where('price', '>=', $minPrice)->where('price', '<=', $maxPrice)->where('bedrooms', $bedrooms)->where('city', $city)->orderBy('created_at', 'asc')->get();
            $response = [
                'success' => true,
                'listings' => $listing,
            ];

            return response ($response, 200);
        }
    
    }

       /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        //     
        $listing = Listing::where(['slug' => $slug])->orderBy('created_at', 'asc')->firstOrFail();
        $response = [
            'success' => true,
            'listing' => $listing, 
        ];

        return response($response, 200);
    }

       /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required|string',
            'price' => 'required',
            'link' => 'required',
            'image' => 'required',
            'city' => 'required',
            'address' => 'required|string',
            'bedrooms' => 'required',
            'bathrooms' => 'required',
            'size' => 'required|string',
        ],
        [  
            'name.required' => 'Please enter a name for this listing',
            'price.required' => 'Please enter a price for this listing',
            'link.required' => 'Please enter a link for this listing',
            'image.required' => 'Please input an image for this listing',
            'city.required' => 'Please enter a city for this listing',
            'address.required' => 'Please enter an address for this listing',
            'bedrooms.required' => 'Please the number of bedrooms for this listing',
            'bathrooms.required' => 'Please the number of bathrooms for this listing',
            'size.required' => 'Please the size of this listing',
        ]
        ); 
        
        $filename = "";
        if ($request->file('image')) {
            $filename = $request->file('image')->store('images/listings', 'public');
        } else {
            $filename = "null";
        }
        
        $listing = Listing::create([
            'name' => $request->name,
            'price' => $request->price,
            'link' => $request->link,
            'image' => $filename,
            'city' => $request->city,
            'address' => $request->address,
            'bedrooms' => $request->bedrooms,
            'bathrooms' => $request->bathrooms,
            'size' => $request->size,
        ]);

        $response = [
            'success' => true,
            'message' => 'Listing added successfully',
            'listing' => $listing, 
        ];

        return response($response, 200);
    }

        /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        //
        $request->validate([
            'name' => 'required|string',
            'price' => 'required',
            'link' => 'required',
            'city' => 'required',
            'address' => 'required|string',
            'bedrooms' => 'required|string',
            'bathrooms' => 'required|string',
            'size' => 'required|string',
        ],
        [  
            'name.required' => 'Please enter a name for this listing',
            'price.required' => 'Please enter a price for this listing',
            'link.required' => 'Please enter a link for this listing',
            'city.required' => 'Please enter a city for this listing',
            'address.required' => 'Please enter an address for this listing',
            'bedrooms.required' => 'Please the number of bedrooms for this listing',
            'bathrooms.required' => 'Please the number of bathrooms for this listing',
            'size.required' => 'Please the size of this listing',
        ]
        ); 

        $listing = Listing::where(['slug' => $slug])->firstOrFail();
        $edit = $request->all();

        $filename = "";
        if ($request->file('new_image')) {
            if (Storage::disk('public')->exists($listing->image)) {
                Storage::disk('public')->delete($listing->image);
            }
            $filename = $request->file('new_image')->store('images/listings', 'public');
            $edit['image'] = $filename;
        } else {
            $filename = $listing->image;
            $edit['image'] = $filename;
        };

        $listing->update($edit);

        $response = [
            'success' => true,
            'message' => 'Listing added successfully',
            'listing' => $listing, 
        ];

        return response($response, 200);
    }

      /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        //
        $listing = Listing::where(['slug' => $slug])->firstOrFail()->delete();
        $response = [
            'success' => true,
            'message' => 'Post deleted successfully',
        ];

        return response($response, 200);
    }
}