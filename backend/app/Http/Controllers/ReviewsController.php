<?php

namespace App\Http\Controllers;

use Storage;
use App\Models\Reviews;
use Illuminate\Http\Request;

class ReviewsController extends Controller
{
     /**
     * Display a reviews of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $reviews = reviews::orderBy('created_at', 'asc')->get();
        $response = [
            'success' => true,
            'reviews' => $reviews,
        ];
        
        return response ($response, 200);
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
        $reviews = Reviews::where(['slug' => $slug])->orderBy('created_at', 'asc')->firstOrFail();
        $response = [
            'success' => true,
            'review' => $reviews, 
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
            'image' => 'required',
            'review' => 'required|string',
            'stars' => 'required|',
        ],
        [  
            'name.required' => 'Please enter the name of the reviewer',
            'image.required' => 'Please input an image for this reviews',
            'review.required' => 'Please enter a review for this reviews',
            'stars.required' => 'Please the number of stars for this reviews',
        ]
        ); 
        
        $filename = "";
        if ($request->file('image')) {
            $filename = $request->file('image')->store('images/thumbnail', 'public');
        } else {
            $filename = "null";
        }
        
        $reviews = Reviews::create([
            'name' => $request->name,
            'image' => $filename,
            'review' => $request->review,
            'stars' => $request->stars,
        ]);

        $response = [
            'success' => true,
            'message' => 'reviews added successfully',
            'review' => $reviews, 
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
            'image' => 'required',
            'review' => 'required|string',
            'stars' => 'required|',
        ],
        [  
            'name.required' => 'Please enter the name of the reviewer',
            'image.required' => 'Please input an image for this reviews',
            'review.required' => 'Please enter a review for this reviews',
            'stars.required' => 'Please the number of stars for this reviews',
        ]
        ); 

        $reviews = Reviews::where(['slug' => $slug])->firstOrFail();
        $edit = $request->all();

        $filename = "";
        if ($request->file('new_image')) {
            if (Storage::disk('public')->exists($reviews->image)) {
                Storage::disk('public')->delete($reviews->image);
            }
            $filename = $request->file('new_image')->store('images/thumbnail', 'public');
            $edit['image'] = $filename;
        } else {
            $filename = $reviews->image;
            $edit['image'] = $filename;
        };

        $reviews->update($edit);

        $response = [
            'success' => true,
            'message' => 'reviews added successfully',
            'review' => $reviews, 
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
        $reviews = Reviews::where(['slug' => $slug])->firstOrFail()->delete();
        $response = [
            'success' => true,
            'message' => 'Post deleted successfully',
        ];

        return response($response, 200);
    }
}