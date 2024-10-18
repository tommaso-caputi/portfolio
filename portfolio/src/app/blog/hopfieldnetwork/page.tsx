"use client";

import Bar from "@/components/Bar";
import pageLoader from "@/components/pageLoader";

export default function Post1() {
    const sections = 2;
    const visibleSections = pageLoader(sections, 400);

    return (
        <div className="flex justify-center min-h-screen py-7">
            <div className="space-y-10 pt-8 text-left px-3 sm:w-8/12 md:w-8/12 lg:w-8/12 mb-36">
                <div className={`transition-opacity duration-[1000ms] ${visibleSections[0] ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex">
                        <div className="space-y-4 w-11/12">
                            <p style={{ fontSize: '17px' }} className='font-medium'>Hopfield Network Python implementation</p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-300 pb-2" style={{ color: '#00000060' }}>August 18, 2024</p>
                </div>
                {/* Post */}
                <div className={`transition-opacity duration-[1000ms] ${visibleSections[1] ? 'opacity-100' : 'opacity-0'}`}>
                    <header>
                        <h1 className="text-5xl font-bold pb-10">Hopfield Network Python implementation</h1>
                    </header>
                    <section>
                        <h3 className="subparagraph-title">What is a Hopfield Network?</h3>
                        <p className="normal-text">Hopfield networks, introduced by physicist John Joseph Hopfield in 1982, offer a fascinating perspective on the workings of <strong>associative memory</strong> — a mechanism that allows us to recall information based on its content, much like when a scent evokes a childhood memory. Hopfield, who won the Nobel Prize in Physics in 2024 alongside Geoffrey Hinton for their pioneering role in developing neural networks, designed a model that captures the essence of this process within an artificial system.</p>
                        <p className="normal-text">A Hopfield network can perform two primary tasks: <strong>pattern recognition</strong> and <strong>error correction</strong>. It can store a set of patterns (binary vectors) in its memory, and when a new input is presented, the network will try to recall the closest stored pattern, even if the input is incomplete or noisy. This process is known as <strong>auto-association</strong>, where the network can reconstruct a full pattern from a partial one. For example, if the net has learned to store images, it can recognize an image even if parts are missing or distorted, retrieving the correct version from memory.</p>
                        <div className="flex justify-center my-2">
                            <img src="/post-assets/post1/patter-reconstruction.png" alt="Pattern Reconstruction" />
                        </div>
                    </section>
                    <section>
                        <h3 className="subparagraph-title">How it works?</h3>
                        <ul className="bulleted-list">
                            <li>
                                <p className="inner-bulleted-list-title">Neurons (Node)</p>
                                <ul className="inner-bulleted-list">
                                    <li>
                                        Each neuron in the network represents a binary unit that can have a state of either <span style={{ fontWeight: 'bold' }}>+1</span> (active) or <span style={{ fontWeight: 'bold' }}>−1</span> (inactive). Neurons are both input and output units, meaning they receive inputs and produce outputs. They are fully connected, which means every neuron is connected to every other neuron.
                                    </li>
                                </ul>
                                <ul className="inner-bulleted-list">
                                    <li>
                                        The current configuration of the network can be represented as a <strong>state vector</strong> <span style={{ fontWeight: 'bold' }}>s = [s<sub>1</sub>, s<sub>2</sub>, …, s<sub>N</sub>]</span>, where N is the total number of neurons. Each element <span style={{ fontWeight: 'bold' }}>s<sub>i</sub></span> indicates the state of neuron i. The network’s goal is to update this state vector until it reaches a stable, low-energy state.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="inner-bulleted-list-title">Weights</p>
                                <ul className="inner-bulleted-list">
                                    <li>
                                        The connections between neurons are defined by weights <span style={{ fontWeight: 'bold' }}>w<sub>ij</sub></span>, which determine the strength and nature (excitatory or inhibitory) of the connections. The weights are symmetric, ensuring that the influence between two neurons is mutual. Weights are learned during the training phase, where patterns are stored in the network.
                                    </li>
                                </ul>
                                <ul className="inner-bulleted-list">
                                    <li>
                                        The weight matrix is calculated via <a href="https://en.wikipedia.org/wiki/Hebbian_theory">Hebb&apos;s law of association</a> (the outer product of the image vector):
                                        <br />
                                        <span style={{ fontWeight: 'bold' }}>w<sub>ij</sub> = Σ<sub>μ=1</sub><sup>p</sup> s<sub>i</sub><sup>μ</sup> s<sub>j</sub><sup>μ</sup></span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="inner-bulleted-list-title">Update Rule ( auto-association )</p>
                                <ul className="inner-bulleted-list">
                                    The network relies on an update rule to change the states of neurons. This can be done synchronously (all neurons update at once) or asynchronously (one neuron at a time). The rule is:
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>
                                            s<sub>i</sub> = sign <span>(</span>∑<sub>j</sub> w<sub>ij</sub> s<sub>j</sub><span>)</span>
                                        </span>
                                    </p>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="subparagraph-title">Python implementation</h3>
                        <p className="normal-text">Let’s write some code for demonstrates how a Hopfield network can be used to store and reconstruct multiple images.</p>
                        <ul className="numbered-list">
                            <li>
                                <p className="normal-text">Import libraries</p>
                                <pre className="code-block">
                                    <code>
                                        {`import numpy as np # for numerical operations
import matplotlib.pyplot as plt # for displaying images(array)
from PIL import Image # for image processing`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <p className="normal-text">Image processing functions</p>
                                <pre className="code-block">
                                    <code>
                                        {`def load_img(path, side): # Load and process images into a binary array, where pixels are represented as 1 or -1
    img = Image.open(path)
    img = img.resize((side, side))
    img = img.convert('1')
    img = 2 * np.array(img, int) - 1
    return img.flatten()

def show_array(img_array): # Visualize images(array)
    side = int(np.sqrt(img_array.shape[0]))
    img_array = img_array.reshape((side, side))
    plt.figure(figsize=(3, 3))
    plt.imshow(img_array)
    plt.axis('off')
    plt.show()

def modify_img(n, img): # Introduce noise or modifications to an image, for testing the network’s ability to reconstruct it
    # Make 1/2% of image negative
    for i in range(n):
        if i > n / 2 - 1:
            img[i] = -1
    return img`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <p className="normal-text">Hopfield net equations</p>
                                <pre className="code-block">
                                    <code>
                                        {`# weights matrix
def calculate_w(img): # Create a weight matrix using the Hebbian learning rule based on the outer product of the image vector.
    '''
    w = np.zeros((n,n))
    for i in range(n):
        for j in range(n):
            if i != j:
                w[i,j] = img[i] * img[j]
    '''
    return np.outer(img, img)

# reconstruct image
def reconstructed_image(n, w, state): # Use the weight matrix to reconstruct an image from a modified or noisy version
    for i in range(n):
        sum = 0
        for j in range(n):
            sum += w[i,j] * state[j]
        state[i] = 1 if sum > 0 else -1
    return state
    # return np.dot(w, state)`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                        <p>Here is an example of a Hopfield network that memorizes 5 different patterns and reconstructs them from a modified pattern:</p>
                        <div className="flex space-x-4 overflow-x-auto mt-2 mb-4">
                            <div className="flex flex-col space-y-2">
                                <img src="/post-assets/post1/pattern1.png" alt="Pattern 1" className="fixed-size-image" />
                                <p>Pattern 1</p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <img src="/post-assets/post1/pattern2.png" alt="Pattern 2" className="fixed-size-image" />
                                <p>Pattern 2</p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <img src="/post-assets/post1/pattern3.png" alt="Pattern 3" className="fixed-size-image" />
                                <p>Pattern 3</p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <img src="/post-assets/post1/pattern4.png" alt="Pattern 4" className="fixed-size-image" />
                                <p>Pattern 4</p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <img src="/post-assets/post1/pattern5.png" alt="Pattern 5" className="fixed-size-image" />
                                <p>Pattern 5</p>
                            </div>
                        </div>
                        <div>
                            <p className="normal-text">Now let&apos;s run the code and analyze the results:</p>
                            <pre className="code-block">
                                <code>
                                    {`#multile patterns memory
side = 50
n = side * side #number of neurons(pixels)

#memory images
imgs=[]
for i in range(1,6): #memorize images from 1 to x-1
  imgs.append(load_img(f'p{i}.jpeg', side))

print('memorized images:')
show_multiple_arraysi(imgs)

#weights matrix
w = np.zeros((n,n))
for p in range(len(imgs)):
  w+=calculate_w(imgs[p])

#set inital state
state = modify_img(n, load_img('p2.jpeg', side)) #modified image
#state = np.random.choice([-1,1], size=n) #random pixels
print('init state:')
show_array(state)

#reconstruct image
state = reconstructed_image(n, w, state)
print('reconstructed image:')
show_array(state)`}
                                </code>
                            </pre>
                            <p className="normal-text">Output:</p>
                            <div className="flex justify-center"><img src="/post-assets/post1/output.png" className="w-40" /></div>
                            <p className="normal-text">As we can see from the output, the Hopfield network successfully reconstructed the original image (Pattern 2) from the modified input. This demonstrates the network&apos;s ability to recover stored patterns even when presented with noisy or incomplete data. The reconstructed image closely resembles the original, showcasing the power of associative memory.</p>
                        </div>
                    </section>
                    <section>
                        <h3 className="subparagraph-title">Conclusion</h3>
                        <p className="normal-text">Hopfield networks are a remarkable fusion of biological inspiration and computational power. They not only deepen our understanding of how memory and association work in the brain, but also provide valuable insights into creating artificial intelligence systems that mimic human cognition. The ability of Hopfield networks to store and recall patterns makes them a vital tool in fields such as <strong>computer vision</strong>, <strong>machine learning</strong>, and <strong>data recovery</strong>.</p>
                        <p className="normal-text">The code provided demonstrates how to implement a Hopfield network in Python. By extending the capabilities of Hopfield networks, we can explore exciting new possibilities in the realm of artificial intelligence and machine learning. As we delve deeper into the intricacies of these networks, we stand to unlock further potential in bridging the gap between human and artificial intelligence.</p>
                        <p className="normal-text">In conclusion, Hopfield networks are more than just a theoretical construct; they represent a significant step forward in our understanding of neural computation and memory. Their application can lead to innovative solutions across various domains, paving the way for future research and advancements in artificial intelligence.</p>
                    </section>
                </div>
            </div>
            <Bar />
        </div>
    );
}